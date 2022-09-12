const Post = require("../models/Post.model");

module.exports.postsController = {
  createPost: async (req, res) => {
    try {
      const { title, text, _userId } = req.body;
      const data = await Post.create({
        title,
        text,
        _userId,
      });
      res.json(data);
    } catch (e) {
      res.json(e.message);
    }
  },

  like: async (req, res) => {
    // Указывается postId  и передается userId пользователя который ставит лайк, если пользователь уже поставил ранее лайк, лайк убирается
    try {
      const post = await Post.findById(req.params.id);
      if (!post.likes.includes(req.body._userId)) {
        const data = await Post.findByIdAndUpdate(req.params.id, {
          $push: { likes: req.body._userId },
        });
        res.json(data);
      } else {
        const data = await Post.findByIdAndUpdate(req.params.id, {
          $pull: { likes: req.body._userId },
        });
        res.json(data);
      }
    } catch (e) {
      res.json(e.message);
    }
  },

  getLikedPosts: async (req, res) => {
    // Вывод всех понравивших постов пользователю
    try {
      const result = await Post.find({ likes: req.params.id });
      res.json(result);
    } catch (e) {
      res.json(e.message);
    }
  },
};
