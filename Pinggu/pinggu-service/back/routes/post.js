import express from 'express';
import db from '../models/index.js';
const { Post } = db;

const router = express.Router();

/* 마이페이지-내 게시물 목록 */
router.get('/', (req, res) => {
  try {
    Post.findAll({ where: { user: req.user.id } })
    .then(re => {
      console.log('re >>> ', re);
      res.setHeader('Access-Control-Allow-Credentials', 'true');
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

/* 마이핑스 추가-마이핑스 값이 없는 포스트 목록 */
router.get('/nullmypings', (req, res) => {
  Post.findAll({
    where: {
      mypings: null,
      user: 7 // 현재 로그인한 유저 아이디로 수정
    }
  })
  .then(posts => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.json(posts);
  })
  .catch(err => {
    console.log('err >>> ', err);
    res.json(err);
  });
});

export default router;