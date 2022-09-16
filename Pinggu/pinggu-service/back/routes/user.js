import express from 'express';
import db from '../models/index.js';
const { Follow, User, Post, sequelize } = db;
const { QueryTypes } = sequelize;

const router = express.Router();

/* 사용자 프로필 가져오기 */
router.get('/:userId', (req, res) => {
  User.findOne({
    where: { id: req.params.userId },
    attributes: ['id', 'nickname', 'bio', 'profile_image_url']
  })
  .then(result => res.json(result))
  .catch(err => {
    console.log('err >>> ', err);
    res.json({message: 'fail'});
  });
});


/* 팔로워 목록 가져오기 */
router.get('/:userId/followers', async (req, res) => {
  const query = 'SELECT USER.id, USER.nickname, USER.profile_image_url FROM USER INNER JOIN FOLLOW ON (FOLLOW.host=USER.id) WHERE FOLLOW.follow=:userId';
  try {
    const followers = await sequelize.query(query, {
      type: QueryTypes.SELECT,
      replacements: { userId: req.params.userId }
    });
    res.json(followers);
  } catch (err) {
    console.log('err >>> ', err);
    res.json({message: 'fail'});
  }
});

/* 팔로잉 목록 가져오기 */
router.get('/:userId/followings', async (req, res) => {
  const query = 'SELECT USER.id, USER.nickname, USER.profile_image_url FROM USER INNER JOIN FOLLOW ON (FOLLOW.follow=USER.id) WHERE FOLLOW.host=?';
  try {
    const followings = await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
      replacements: [req.params.userId]
    });
    res.json(followings);
  } catch (err) {
    console.log('err >>> ', err);
    res.json({message: 'fail'});
  }
});

export default router;