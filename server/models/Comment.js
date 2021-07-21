const { Schema } = require('mongoose');
const commentSchema = new Schema({
   content: {
      type: String,
   },
   date: {
      type: Date,
      default: Date.now,
   },
   likes: {
      type: Number,
   },
});
module.exports = commentSchema;
