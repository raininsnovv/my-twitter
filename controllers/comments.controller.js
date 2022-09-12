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
};
