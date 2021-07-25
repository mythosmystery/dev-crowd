const { Comment } = require('../../models');
module.exports = {
   Query: {
      comments: async () => {
         return await Comment.find().populate('postedBy');
      },
      comment: async (parent, { commentId }) => {
         return await Comment.findOne({ _id: commentId }).populate('postedBy');
      },
   },
   Mutation: {},
};
