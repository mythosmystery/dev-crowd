const db = require('../config/connection');
const { User, Post, Comment } = require('../models');
const userSeeds = require('./userSeeds.json');
const postSeeds = require('./postSeeds.json');
const postId = '60fd0f26b2e0bb3ffeaf7e06';

db.once('open', async () => {
   try {
      await User.deleteMany({});
      const user = await User.create({
         _id: '60fd0f26b2e0bb3ffeaf7e03',
         name: 'Test Testerson',
         username: 'testttt',
         email: 'test@test.net',
         password: 'password123',
      });

      await Comment.deleteMany({});
      const comment1 = await Comment.create({
         _id: '60fd0f753d62ff405f783010',
         content: 'test comment',
         postedBy: user._id,
         postedOn: postId,
         username: user.username,
      });
      const comment2 = await Comment.create({
         _id: '60fd0f753d62ff405f783011',
         content: 'test comment2',
         postedBy: user._id,
         postedOn: postId,
         username: user.username,
      });

      await Post.deleteMany({});
      const post = await Post.create({
         _id: postId,
         content: 'test post',
         postedBy: user._id,
         username: user.username,
         comments: [comment1._id, comment2._id],
      });

      console.log(post);
      console.log('all done!');
      process.exit(0);
   } catch (err) {
      throw err;
   }
});
