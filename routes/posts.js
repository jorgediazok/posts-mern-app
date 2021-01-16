const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/posts');
const auth = require('../middleware/auth');

router.get('/posts', PostsController.getPosts);
router.post('/posts', auth, PostsController.createPost);
router.put('/posts/:id', auth, PostsController.updatePost);
router.delete('/posts/:id', auth, PostsController.deletePost);
router.put('/posts/:id/likePost', auth, PostsController.likePost);

module.exports = router;
