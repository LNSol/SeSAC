import express from 'express';
import Sequelize from 'sequelize';
import db from '../models/index.js';
const { Mypings, Sharepings, Post } = db;
const { Op } = Sequelize;

const router = express.Router();

/* 마이페이지-마이핑스 목록 보기 */
/**
 * CATEGORY, MYPINGS
 * 각 카테고리 별 마이핑스는 3개만 보임
 * 카테고리 이름 옆 더보기 버튼 클릭 시 해당 카테고리에 속하는 모든 마이핑스 목록 가져옴.
 * 그냥 한 번 요청에 다 보내주자 - 다시 봐라
 */
router.get('/', async (req, res) => {
  try {
    const sharepings = await Sharepings.findAll({
      where: {
        guest: req.user.id,
      },
      attributes: ['mypings']
    });
    const sharepingsArr = sharepings.map(ping => ping.mypings);

    const mypings = await Mypings.findAll({
      where: {
        [Op.or]: [{
          user: req.user.id
        }, {
          id: {
            [Op.in]: sharepingsArr
          }
        }]
      }
    });
    res.json(mypings);
  } catch (error) {
    console.error('error >>> ', error);
    res.json(error);
  }
});

/* 마이핑스 생성 */
router.post('/', (req, res) => {
  console.log(req.body);
  res.json({message: '생성되었습니다.'})
});

/* 마이핑수 수정 - 특정 마이핑스와 포스트 가져오기 이게 맞나;; */
router.get('/:id', async (req, res) => {
  try {
    const postsAndMypings = await Post.findAll({
      include: [{
        model: Mypings,
        required: false,
      }],
      where: {
        user: 7, // 현재 로그인한 사용자 아이디로 수정해야함.
        [Op.or]: [{mypings: req.params.id}, {mypings: null}]
      }
    });
    res.json(postsAndMypings);
  } catch (error) {
    console.log('error >>> ', error);
    res.json(error);
  }
});

/* 마이핑스 수정 - 수정 작업 */
router.put('/:id', (req, res) => {
  console.log(req.body);
  res.json({message: '수정되었습니다.'});
});

/* 마이핑스 공유(가져오기) - 다시 보자 */
router.get('/share/:id', async (req, res) => {
  try {
    const mypings = await Mypings.findOne({ where: { id: req.params.id }});
    const sharepings = await Sharepings.create({
      host: mypings.user,
      guest: req.user.id,
      mypings: mypings.id
    });
    res.redirect('/mypings');
  } catch (error) {
    console.error('error >>> ', error);
    res.json(error);
  }
});

export default router;