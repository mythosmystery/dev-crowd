const { Post, Comment } = require('../../models');
module.exports = {
   Query: {
      posts: async () => {
         const posts = await Post.find()
            .populate('postedBy')
            .populate('likes')
            .populate({ path: 'comments', populate: { path: 'postedBy' } });
         return posts;
      },
      post: async (parent, { postId }) => {
         return Post.findOne({ _id: postId })
            .populate('postedBy')
            .populate('likes')
            .populate({ path: 'comments', populate: { path: 'postedBy' } });
      },
      postsByUser: async (parent, { username }) => {
         return Post.find({ username })
            .sort({ date: -1 })
            .populate('postedBy')
            .populate('likes')
            .populate({ path: 'comments', populate: { path: 'postedBy' } });
      },
   },
   Mutation: {
      addPost: async (parent, { content }, { user }) => {
         const post = await Post.create({
            content: content,
            postedBy: user._id,
            username: user.username,
         });
         return post;
      },
      removePost: async (parent, { postId }, { user }) => {
         try {
            await Post.deleteOne({ _id: postId, username: user.username });
            await Comment.deleteMany({ postedOn: postId });
            return 'removed ok';
         } catch (err) {
            return err;
         }
      },
      likePost: async (parent, { postId }, { user }) => {
         const post = await Post.findOneAndUpdate({ _id: postId }, { $addToSet: { likes: user._id } }, { new: true }).populate('likes');
         return post;
      },
   },
};
