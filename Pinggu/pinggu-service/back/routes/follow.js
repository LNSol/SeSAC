import express from 'express';
import db from '../models/index.js';
const { Follow } = db;

const router = express.Router();

/* 마이페이지-내 팔로워 목록 보기 */
router.get('/followers', (req, res) => {
  try {
    Follow.findAll({ where: { follow: req.user.id }})
    .then(followers => {
      console.log('follwers >>> ', followers);
      res.json(followers);
    })
    .then(err => {
      console.log('err >>> ', err);
      res.json(err);
    });
  } catch (error) {
    console.error('error >>> ', error);
    res.json(error);
  }
});
/* 마이페이지- 내 팔로잉 목록 보기 */
router.get('/followings', (req, res) => {
  try {
    Follow.findAll({ where: { host: req.user.id }})
    .then(followings => {
      console.log('followings >>> ', followings);
      res.json(followings);
    })
    .catch(err => {
      console.log('err >>> ', err);
      res.json(err);
    });
  } catch (error) {
    console.error('error >>> ', error);
    res.json(error);
  }
});

/* 팔로우하기 */
router.get('/:id', (req, res) => {
  try {
     Follow.create({ host: req.user.id, follow: req.params.id })
     .then(re => {
      console.log('re >>> ', re);
      res.json(re);
     })
     .catch(err => {
      console.log('err >>> ', err);
      res.json(err);
     });
  } catch (error) {
    console.error('error >>> ', error);
    res.json(error);
  }
});
/* 언팔로우하기 */
router.get('/cancel/:id', (req, res) => {
  try {
    Follow.destroy({ where: { host: req.user.id, follow: req.params.id }})
    .then(re => {
      console.log('re >>> ', re);
      res.json(re);
    })
    .catch(err => {
      console.log('err >>> ', err);
      res.json(err);
    });
  } catch (error) {
    console.error('error >>> ', error);
    res.json(error);
  }
});


export default router;