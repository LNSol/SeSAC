import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/', (req, res) => {
  res.end('AUTH');
});

router.get('/login/kakao', passport.authenticate('kakao'));

router.get('/login/kakao/callback', passport.authenticate('kakao', {
  failureRedirect: '/',
}), (req, res) => {
  res.redirect('/');
});

router.get('/logout/kakao', (req, res) => {
  const LOGOUT_REDIRECT_URI = 'http://localhost:4000/auth/logout/kakao/callback';
  res.redirect(`https://kauth.kakao.com/oauth/logout?client_id=${process.env.KAKAO_ID}&logout_redirect_uri=${LOGOUT_REDIRECT_URI}`);
});

router.get('/logout/kakao/callback', (req, res) => {
  req.logout(err => {
    if (err) return next(err);
    req.session.destroy();
    res.redirect('/');
  });
})

export default router;