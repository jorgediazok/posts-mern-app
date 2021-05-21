const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/posts');
const auth = require('../middleware/auth');

router.get('/search', PostsController.getPostsBySearch);
router.get('/', PostsController.getPosts);
router.get('/:id', PostsController.getPost);

router.post('/', auth, PostsController.createPost);
router.put('/:id', auth, PostsController.updatePost);
router.delete('/:id', auth, PostsController.deletePost);
router.put('/:id/likePost', auth, PostsController.likePost);

module.exports = router;
