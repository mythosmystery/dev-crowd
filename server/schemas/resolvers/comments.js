const { Comment, Post } = require('../../models');
module.exports = {
   Query: {
      comments: async () => {
         return await Comment.find().populate('postedBy').populate('postedOn');
      },
      comment: async (parent, { commentId }) => {
         return await Comment.findOne({ _id: commentId }).populate('postedBy').populate('postedOn');
      },
   },
   Mutation: {
      addComment: async (parent, { content, postId }, { user }) => {
         const comment = await Comment.create({
            content: content,
            postedBy: user._id,
            postedOn: postId,
         });
         return await Post.findOneAndUpdate({ _id: postId }, { $addToSet: { comments: comment } }, { new: true });
      },
   },
};
