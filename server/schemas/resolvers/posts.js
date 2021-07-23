const { Post } = require('../../models');
const checkAuth = require('../../utils/auth');
module.exports = {
   Query: {
      posts: async () => {
         const posts = await Post.find().populate('postedBy');
         // posts.map((post) => {
         //    post.username = post.postedBy.username;
         //    console.log(post);
         //    return post;
         // });
         return posts;
      },
      post: async (parent, { postId }) => {
         return Post.findOne({ _id: postId }).populate('postedBy');
      },
      postsByUser: async (parent, { username }) => {
         return Post.find({ username }).populate('postedBy');
      },
   },
   Mutation: {},
};
