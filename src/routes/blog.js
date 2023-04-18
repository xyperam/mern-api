const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const blogController = require('../controllers/blog');

router.post('/post',
[body('title'),
body('body')],
blogController.createBlogPost);

module.exports = router;