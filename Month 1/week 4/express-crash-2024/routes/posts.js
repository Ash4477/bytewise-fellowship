import express from 'express';
import { getPosts, getPost, createPost, updatePost, deletePost } from '../controllers/postController.js'

const router = express.Router();

// Get all posts
router.get('/', getPosts);

// Get a single post
router.get('/:id', getPost);

// create new router
router.post('/', createPost);

// update post
router.put('/:id', updatePost);

// delete post
router.delete('/:id', deletePost);

export default router;