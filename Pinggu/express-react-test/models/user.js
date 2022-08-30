const Sequelize = require('sequelize');
const { STRING, INTEGER, BOOLEAN } = Sequelize;

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userid: {
        type: STRING(100),
        allowNull: false,
        unique: true,
      },
      social_links: {
        type: STRING(15),
        allowNull: false,
        defaultValue: 'local',
      },
      profile_image_url: {
        type: STRING(100),
        allowNull: true,
      },
      nickname: {
        type: STRING(30),
        allowNull: false,
        unique: true,
      },
      bio: {
        type: STRING(150),
        allowNull: true,
      },
      media: {
        type: INTEGER,
        allowNull: true,
      },
      email: {
        type: STRING(50),
        allowNull: true,
      },
      tel: {
        type: STRING(15),
        allowNull: true,
      },
      delflag: {
        type: BOOLEAN,
        allowNull: true,
        defaultValue: false,
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      paranoid: false,
      modelName: 'User',
      tableName: 'USER',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  }
  static associate(db) {
    db.User.hasMany(db.Post, { foreignKey: 'user', sourceKey: 'id', onDelete: 'cascade', onUpdate: 'cascade' });
    db.User.hasMany(db.Media, { foreignKey: 'user', sourceKey: 'id', onDelete: 'cascade', onUpdate: 'cascade' });
  }
};