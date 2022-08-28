const express = require('express');
const cors = require('cors');
const path = require('path');
const { sequelize } = require('../models');

const postsRouter = require('./routes');
const nicknameRouter = require('./routes/nickname');
const titleRouter = require('./routes/title');
const contentRouter = require('./routes/content');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));
app.set('port', process.env.PORT || 4000);

sequelize.sync({ force: false })
  .then((() => {
    console.log('데이터베이스 연결 성공');
  }))
  .catch(err => {
    console.log(err.message);
  });

app.use('/posts', postsRouter);
app.use('/posts/nickname', nicknameRouter);
app.use('/posts/title', titleRouter);
app.use('/posts/content', contentRouter);

app.get('/', (req, res) => {
  res.send('관리자 페이지');
});

app.listen(app.get('port'), () => {
  console.log('server is running...');
});
