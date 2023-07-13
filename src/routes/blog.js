const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const blogController = require('../controllers/blog');

router.post('/post',
[body('title'),
body('body')],
blogController.createBlogPost);

router.get('/posts',blogController.getAllBlogPost)
router.get('/posts/:postId',blogController.getBlogPostById);
router.put('/posts/:postId',blogController.updateBlogPost);
module.exports = router;