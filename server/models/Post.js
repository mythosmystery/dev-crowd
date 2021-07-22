const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const postSchema = new Schema(
   {
      content: {
         type: String,
         required: true,
      },
      date: {
         type: Date,
         default: Date.now,
      },
      likes: [{ type: Schema.ObjectId, ref: 'User' }],
      comments: [commentSchema],
      postedBy: {
         type: Schema.ObjectId,
         ref: 'User',
      },
   },
   {
      toJSON: {
         virtuals: true,
      },
   }
);
postSchema.virtual('likeCount').get(() => {
   return this.likes.length;
});
postSchema.virtual('username').get(() => {
   return this.postedBy.username;
});
postSchema.virtual('commentCount').get(() => {
   return this.comments.length;
});
const Post = model('Post', postSchema);
module.exports = Post;
