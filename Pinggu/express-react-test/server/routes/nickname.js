const express = require('express');
const { User, Post } = require('../../models');
const router = express.Router();

router.get('/:nickname', (req, res) => {
  User.findOne({
    include: [{
      model: Post,
      attributes: ['id', 'title', 'content']
    }],
    where: {
      nickname: req.params.nickname
    },
    attributes: ['nickname']
  })
  .then(posts => res.json(posts))
  .catch(err => res.send(err));
});

module.exports = router;