const express = require('express');
const router = express.Router();
const { Post } = require('../../models');

router.delete('/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    res.send(err);
  });
});

module.exports = router;