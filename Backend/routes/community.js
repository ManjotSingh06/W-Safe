import express from 'express';
import Post from '../models/Post.js';


const router = express.Router();



router.post('/', async (req, res) => {
  try {
    const { message, timestamp, location } = req.body;
    const post = new Post({ message, timestamp, location });
    await post.save();
    req.app.get('io').emit('new-post', post);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});


router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ timestamp: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

export default router;
