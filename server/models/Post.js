const { Schema, model } = require('mongoose');

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
      likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
      comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
      postedBy: {
         type: Schema.Types.ObjectId,
         ref: 'User',
      },
      username: {
         type: String,
      },
   },
   {
      toJSON: {
         virtuals: true,
      },
   }
);
const Post = model('Post', postSchema);
module.exports = Post;
