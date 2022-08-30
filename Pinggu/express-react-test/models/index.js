const Sequelize = require('sequelize');
const User = require('./user');
const Post = require('./post');
const Media = require('./media');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.Media = Media;

User.init(sequelize);
Post.init(sequelize);
Media.init(sequelize);

User.associate(db);
Post.associate(db);
Media.associate(db);

module.exports = db;