const { User } = require('../../models');
const jwt = require('jsonwebtoken');

const signToken = ({ _id, email, username }) => {
   return jwt.sign({ _id, email, username }, 'super secret', { expiresIn: '2h' });
};

module.exports = {
   Query: {
      users: async () => {
         return User.find();
      },
      user: async (parent, { userId }) => {
         return User.findOne({ _id: userId });
      },
      me: async (parent, args, context) => {
         if (context.user) {
            return User.findOne({ _id: context.user._id });
         }
         throw new AuthenticationError('You need to be logged in');
      },
   },
   Mutation: {
      addUser: async (parent, { username, email, password }) => {
         const user = await User.create({ username, email, password });
         const token = signToken(user);
         return {
            ...user._doc,
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
            ...user._doc,
            token,
         };
      },
   },
};
