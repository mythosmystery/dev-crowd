const { Comment, Post } = require('../../models');
module.exports = {
   Query: {
      comments: async () => {
         return await Comment.find().populate('postedBy').populate('postedOn').populate('likes');
      },
      comment: async (parent, { commentId }) => {
         return await Comment.findOne({ _id: commentId }).populate('postedBy').populate('postedOn').populate('likes');
      },
   },
   Mutation: {
      addComment: async (parent, { content, postId }, { user }) => {
         const comment = await Comment.create({
            content: content,
            postedBy: user._id,
            postedOn: postId,
            username: user.username,
         });
         return await Post.findOneAndUpdate({ _id: postId }, { $addToSet: { comments: comment } }, { new: true });
      },
      removeComment: async (parent, { commentId }, { user }) => {
         await Comment.deleteOne({ _id: commentId, username: user.username });
         return 'deleted ok';
      },
      likeComment: async (parent, { commentId }, { user }) => {
         const comment = await Comment.findOneAndUpdate({ _id: commentId }, { $addToSet: { likes: user._id } }, { new: true }).populate('likes');
         return comment;
      },
      unlikeComment: async (parent, { commentId }, { user }) => {
         const comment = await Comment.findOneAndUpdate({ _id: commentId }, { $pull: { likes: user._id } }, { new: true }).populate('likes');
         return comment;
      },
   },
};
