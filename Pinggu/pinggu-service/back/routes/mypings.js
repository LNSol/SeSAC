import express from 'express';
import Sequelize from 'sequelize';
import db from '../models/index.js';
const { Mypings, Sharepings } = db;
const { Op } = Sequelize;

const router = express.Router();

/* 마이페이지-마이핑스 목록 보기 */
/**
 * CATEGORY, MYPINGS
 * 각 카테고리 별 마이핑스는 3개만 보임
 * 카테고리 이름 옆 더보기 버튼 클릭 시 해당 카테고리에 속하는 모든 마이핑스 목록 가져옴.
 * 그냥 한 번 요청에 다 보내주자
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

router.get('/:id', async (req, res) => {
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

/* 마이핑스 생성 테스트 */
router.post('/', (req, res) => {
  console.log(req.body);
  res.json({message: 'create'});
});

export default router;