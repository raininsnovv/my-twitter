const { Router } = require("express");
const { postsController } = require("../controllers/posts.controller");

const router = Router();

router.get("/posts/:id", postsController.getLikedPosts);
router.post("/posts", postsController.createPost);
router.patch("/posts/:id", postsController.like);

module.exports = router;
