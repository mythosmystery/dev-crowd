const { Schema } = require('mongoose');
const commentSchema = require('./Comment');

const postSchema = new Schema({
   content: {
      type: String,
      required: true,
   },
   date: {
      type: Date,
      default: Date.now,
   },
   likes: {
      type: Number,
   },
   comments: [commentSchema],
});
module.exports = postSchema;
