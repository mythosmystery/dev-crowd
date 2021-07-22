const { Post } = require('../../models');
module.exports = {
   Query: {
      posts: async () => {
         return Post.find().populate('postedBy');
      },
      post: async (parent, { postId }) => {
         return Post.findOne({ _id: postId });
      },
   },
   Mutation: {},
};
