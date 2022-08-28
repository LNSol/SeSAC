const { User, Post } = require('../../models');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [{
        model: User,
        attributes: ['nickname']
      }]
    });
    res.json(posts);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;