const { Post } = require('../../models');
module.exports = {
   Query: {
      comments: async (parent, { postId }) => {
         const post = await Post.findOne({ _id: postId });
         return post.comments;
      },
      comment: async (parent, { postId, commentId }) => {
         const post = await Post.findOne({ _id: postId });
         const commentIndex = post.comments.findIndex((comment) => comment.id === commentId);
         return post.comments[commentIndex];
      },
   },
   Mutation: {},
};
