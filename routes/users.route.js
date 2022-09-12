const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");

const router = Router();

router.post("/users", usersController.createUser);
router.patch("/users/:id", usersController.save);

module.exports = router;
