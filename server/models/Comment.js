const { Schema } = require('mongoose');
const commentSchema = new Schema(
   {
      content: {
         type: String,
      },
      date: {
         type: Date,
         default: Date.now,
      },
      likes: [{ type: Schema.ObjectId, ref: 'User' }],
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
commentSchema.virtual('likeCount').get(() => {
   return this.likes.length;
});
module.exports = commentSchema;
