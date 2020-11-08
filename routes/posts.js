const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/posts');

router.get('/posts', PostsController.getPosts);
router.post('/posts', PostsController.createPost);
router.put('/posts/:id', PostsController.updatePost);
router.delete('/posts/:id', PostsController.deletePost);
router.put('/posts/:id/likePost', PostsController.likePost);

export default router;
