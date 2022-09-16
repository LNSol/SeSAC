import express from 'express';
import passport from 'passport';
import passportConfig from './passport/index.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './models/index.js';
const { sequelize } = db;
const { dirname } = path;
const __dirname = dirname(fileURLToPath(import.meta.url));
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};

import indexRouter from './routes/index.js';
import authRouter from './routes/auth.js';
import profileRouter from './routes/profile.js';
import followRouter from './routes/follow.js';
import postRouter from './routes/post.js';
import mypingsRouter from './routes/mypings.js';
import testRouter from './routes/user.js';

dotenv.config();
const app = express();
passportConfig();
app.set('port', process.env.PORT || 4000);

app.use(cors(corsOptions));
app.use(morgan('dev'));
app.use('/static', express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKEI_SECRET,
  cookie: {
    httpOnly: true,
    Secure: true
  },
  name: 'session-cookie'
}));
app.use(passport.initialize());
app.use(passport.session());

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공')
  })
  .catch(err => {
    console.log('데이터베이스 연결 실패', err)
  });

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/profile', profileRouter);
app.use('/follow', followRouter);
app.use('/post', postRouter);
app.use('/mypings', mypingsRouter);
app.use('/test', testRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('ERORROOROR');
});

app.listen(app.get('port'), () => {
  console.log(`${app.get('port')} server is running...`);
})