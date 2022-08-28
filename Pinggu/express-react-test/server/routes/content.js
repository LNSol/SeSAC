const Sequelize = require('sequelize');
const { Op } = Sequelize;
const { User, Post } = require('../../models');
const express = require('express');
const router = express.Router();

router.get('/:content', (req, res) => {
   Post.findAll({
    include: [{
      model: User,
      attributes: ['nickname']
    }],
    where: {
      content: {
        [Op.like]: `%${req.params.content}%`
      }
    },
    attributes: ['id', 'title', 'content']
   })
   .then(posts => res.json(posts))
   .catch(err => res.send(err));
});

module.exports = router;