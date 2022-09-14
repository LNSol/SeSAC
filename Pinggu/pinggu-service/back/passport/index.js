import passport from 'passport';
import kakao from './kakaoStrategy.js';
import google from './googleStrategy.js';
import db from '../models/index.js';
const { User } = db;

export default () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({ where: { id }})
      .then(user => done(null, user))
      .catch(err => done(err));
  });

  kakao();
  google();
}