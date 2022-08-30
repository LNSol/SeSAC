const { User, Post, Media } = require('../../models');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{
        model: User,
        attributes: ['nickname', 'profile_image_url']
      }, {
        model: Media,
        attributes: ['src']
      }],
      attributes: ['id', 'title', 'content']
    });
    res.json(posts);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;