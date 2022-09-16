import express from 'express';
import db from '../models/index.js';
const { Follow } = db;

const router = express.Router();

/* 팔로우하기 */
router.post('/:userId', (req, res) => {
  Follow.create({ host: req.user.id, follow: req.params.userId })
  .then(result => { // 성공 시 insert 된 로우 반환
    res.json({message: 'success'});
  })
  .catch(err => {
    console.log('err >>> ', err);
    res.json({message: 'fail'});
  });
});

/* 언팔로우하기 */
router.delete('/:userId', (req, res) => {
  Follow.destroy({ where: { host: req.user.id, follow: req.params.userId }})
  .then(result => { // 성공 시 delete 된 로우 수 반환
    res.json({message: 'success'});
  })
  .catch(err => {
    console.log('err >>> ', err);
    res.json({message: 'fail'});
  });
});


export default router;