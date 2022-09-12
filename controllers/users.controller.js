const User = require("../models/User.model");

module.exports.usersController = {
  createUser: async (req, res) => {
    try {
      await User.create({
        name: req.body.name,
      });
      res.json("User added");
    } catch (e) {
      res.json(e.message);
    }
  },
  save: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user.saves.includes(req.body.postId)) {
        await user.updateOne({ $push: { saves: req.body.postId } });
        res.json("Post sohranen");
      } else {
        await user.updateOne({ $pull: { saves: req.body.postId } });
        res.json("Post udalen");
      }
    } catch (e) {
      res.json(e.message);
    }
  },
};
