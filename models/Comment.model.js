const mongoose = require("mongoose");
const commentSchema = mongoose.Schema({
  text: String,
  _userId: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  _postId: { type: mongoose.SchemaTypes.ObjectId, ref: "Post" },
});
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
