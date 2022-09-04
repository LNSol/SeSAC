import Sequelize from 'sequelize';
import configFile from '../config/config.json' assert { type: 'json' };
import User from './user.js';
import Follow from './follow.js';

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

User.init(sequelize);
Follow.init(sequelize);

User.associate(db);

export default db;