import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('MAIN');
});

/* 세션에 저장된 사용자 정보 가져오기 */
router.get('/me', (req, res) => {
  res.json(req.session.passport.user);
});


/* TEST */
router.get('/who', (req, res) => {
  console.log('user >>> ', req.user);
  console.log('session >>> ', req.session.passport);
  console.log('sessionId >>> ', req.session.id);
  res.end('im');
});
/*-----------------------------------------------------*/

export default router;