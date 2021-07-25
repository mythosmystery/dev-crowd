const { User, Post, Comment } = require('../../models');
const { AuthenticationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const { signToken } = require('../../utils/auth');

module.exports = {
   Query: {
      users: async () => {
         return User.find();
      },
      user: async (parent, { userId }) => {
         return User.findOne({ _id: userId });
      },
      me: async (parent, args, { user }) => {
         if (user) {
            return User.findOne({ _id: user._id });
         }
         throw new AuthenticationError('You need to be logged in');
      },
   },
   Mutation: {
      addUser: async (parent, { username, email, password }) => {
         const user = await User.create({ username, email, password });
         const token = signToken(user);
         return {
            user,
            token,
         };
      },
      login: async (parent, { email, password }) => {
         const user = await User.findOne({ email });
         if (!user) {
            throw new AuthenticationError('No user found');
         }
         const correctPw = await user.isCorrectPassword(password);
         if (!correctPw) {
            throw new AuthenticationError('Incorrect password');
         }
         const token = signToken(user);
         return {
            user,
            token,
         };
      },
      removeUser: async (parent, args, { user }) => {
         if (user) {
            await User.deleteOne({ _id: user._id });
            await Post.deleteMany({ postedBy: user._id });
            await Comment.deleteMany({ postedBy: user._id });
         }
         throw new AuthenticationError('must be logged in');
      },
   },
};
