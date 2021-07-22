const db = require('../config/connection');
const { User, Post } = require('../models');
const userSeeds = require('./userSeeds.json');
const postSeeds = require('./postSeeds.json');

db.once('open', async () => {
   try {
      await User.deleteMany({});
      const user = await User.create({
         name: 'Test Testerson',
         username: 'testttt',
         email: 'test@test.net',
         password: 'password123',
      });

      await Post.deleteMany({});
      const post = await Post.create({
         content: 'test post',
         postedBy: user,
         comments: [
            {
               content: 'test comment',
               postedBy: user,
            },
            {
               content: 'test comment2',
               postedBy: user,
            },
         ],
      });

      console.log(post);
      console.log('all done!');
      process.exit(0);
   } catch (err) {
      throw err;
   }
});
