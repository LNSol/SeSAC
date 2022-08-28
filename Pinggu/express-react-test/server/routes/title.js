const Sequelize = require('sequelize');
const { Op } = Sequelize;
const express = require('express');
const { User, Post } = require('../../models');
const router = express.Router();


router.get('/:title', (req, res) => {
  Post.findAll({
    include: [{
      model: User,
      attributes: ['nickname']
    }],
    where: {
      title: {
        [Op.like]: `%${req.params.title}%`
      }
    },
    attributes: ['id', 'title', 'content']
  })
  .then(posts => res.json(posts))
  .catch(err => res.send(err));
});

module.exports = router;