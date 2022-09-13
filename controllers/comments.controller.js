const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  createComment: async (req, res) => {
    try {
      const { text, _userId, _postId } = req.body;
      await Comment.create({
        text,
        _userId,
        _postId,
      });
      res.json("Comment added");
    } catch (e) {
      res.json(e.message);
    }
  },
  getCommentById: async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id).populate(
        "_userId _postId",
        "name title"
      );
      res.json(comment);
    } catch (e) {
      res.json(e.message);
    }
  },
  getCommentByPostId: async (req, res) => {
    try {
      const comment = await Comment.find({ _postId: req.params.id }).populate(
        "_userId _postId",
        "name title"
      );
      res.json(comment);
    } catch (e) {
      res.json(e.message);
    }
  },
};
