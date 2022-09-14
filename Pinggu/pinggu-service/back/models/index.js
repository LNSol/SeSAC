import Sequelize from 'sequelize';
import configFile from '../config/config.json' assert { type: 'json' };
import User from './user.js';
import Follow from './follow.js';
import Post from './post.js';
import Category from './category.js';
import Mypings from './mypings.js';
import Sharepings from './sharepings.js';

const env = process.env.NODE_ENV || 'development';
const config = configFile[env];
const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const db = {};

const sequelize = new Sequelize(database, username, password, config);
db.sequelize = sequelize;
db.User = User;
db.Follow = Follow;
db.Post = Post;
db.Category = Category;
db.Mypings = Mypings;
db.Sharepings = Sharepings;

User.init(sequelize);
Follow.init(sequelize);
Post.init(sequelize);
Category.init(sequelize);
Mypings.init(sequelize);
Sharepings.init(sequelize);

User.associate(db);
Post.associate(db);
Category.associate(db);
Mypings.associate(db);
Sharepings.associate(db);


export default db;