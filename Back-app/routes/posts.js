const express = require('express');
const postController= require('../controllers/post.controller');

const router = express.Router();

router.post("/save",postController.save);
router.get("/:id",postController.showOne);
router.get("/posts/:userId",postController.fetchAll);
router.patch("/:userId/:id" , postController.update);
router.delete("/:userId/:id" , postController.destroy)

module.exports = router;