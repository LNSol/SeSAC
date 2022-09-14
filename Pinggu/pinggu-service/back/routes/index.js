import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('MAIN');
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