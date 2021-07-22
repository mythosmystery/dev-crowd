const { Schema } = require('mongoose');
const commentSchema = new Schema({
   content: {
      type: String,
   },
   date: {
      type: Date,
      default: Date.now,
   },
   postedBy: {
      type: Schema.ObjectId,
      ref: 'User',
   },
});
module.exports = commentSchema;
