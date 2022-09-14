import express from 'express';
import db from '../models/index.js';
const router = express.Router();
const { User } = db;

router.get('/myprofile/:nickname/:bio', (req, res) => {
  try {
    User.update({
      nickname: req.params.nickname,
      bio: req.params.bio
    }, {
      where: { id: req.user.id }
    })
    .then(re => {
      console.log('re >>> ', re);
      res.json(re);
    })
    .catch(err => {
      console.log('err >>> ', err);
      res.json({message: '이미 존재하는 닉네임입니다.' });
    });
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

router.get('/myprofile/nickname/:nickname', (req, res) => {
  try {
    User.update({ nickname: req.params.nickname }, { where: { id: req.user.id }})
    .then(re => {
      console.log('re >>> ', re);
      res.json(re);
    })
    .catch(err => {
      console.log('err >>> ', err);
      res.json({message: '이미 존재하는 닉네임입니다.'});
    })
  } catch (error) {
    console.error('error >>> ', error);
    res.json(error);
  }
});

router.get('/userprofile/:id', (req, res) => {
  try {
    User.findOne({ where: { id: req.params.id }})
    .then(user => {
      console.log('user >>> ', user);
      res.json(user);
    })
    .catch(err => {
      console.log('err >>> ', err);
      res.json({message: '해당 사용자를 찾을 수 없습니다.'});
    });
  } catch (error) {
    console.error('error >>> ', error);
    res.json(error);
  }
});

export default router;