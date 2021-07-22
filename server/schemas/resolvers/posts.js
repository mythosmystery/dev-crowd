const { Post } = require('../../models');
module.exports = {
   Query: {
      posts: async () => {
         return Post.find();
      },
      post: async (parent, { postId }) => {
         return Post.findOne({ _id: postId });
      },
   },
   Mutation: {},
};
