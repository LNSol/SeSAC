import express from 'express';
import db from '../models/index.js';
const { Follow, User, Post, sequelize } = db;
const { QueryTypes } = sequelize;

const router = express.Router();

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
    console.log(err);
    res.json(err);
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
    console.log(err);
    res.json(err);
  }
});

export default router;