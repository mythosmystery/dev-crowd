const { Schema, model } = require('mongoose');
const commentSchema = new Schema(
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
      postedBy: {
         type: Schema.Types.ObjectId,
         ref: 'User',
      },
      postedOn: {
         type: Schema.Types.ObjectId,
         ref: 'Post',
      },
   },
   {
      toJSON: {
         virtuals: true,
      },
   }
);

const Comment = model('Comment', commentSchema);
module.exports = Comment;
