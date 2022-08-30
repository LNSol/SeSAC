const { Op } = require('sequelize');
const express = require('express');
const { User, Post, Media } = require('../../models');
const router = express.Router();

router.get('/:nickname', (req, res) => {
  Post.findAll({
    include: [{
      model: User,
      attributes: ['nickname', 'profile_image_url'],
      where: {
        nickname: req.params.nickname
      }
    }, {
      model: Media,
      attributes: ['src']
    }],
    attributes: ['id', 'title', 'content']
  })
  .then(posts => res.json(posts))
  .catch(err => res.send(err));
});

module.exports = router;