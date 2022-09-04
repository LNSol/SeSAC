import Sequelize from 'sequelize';
const { STRING, INTEGER, BOOLEAN } = Sequelize;

export default class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: INTEGER.UNSIGNED,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
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
      nickname: {
        type: STRING(30),
        allowNull: false,
        unique: true,
      },
      bio: {
        type: STRING(150),
        allowNull: true,
      },
      profile_image_url: {
        type: STRING(100),
        allowNull: true,
      },
      email: {
        type: STRING(50),
        allowNull: true,
        unique: true,
      },
      out_date: {
        type: 'TIMESTAMP',
        allowNull: true,
      }
    }, {
      sequelize,
      timestamps: true,
      paranoid: false,
      underscored: true,
      modelName: 'User',
      tableName: 'USER',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  }
  static associate(db) {
    db.User.belongsToMany(db.User, { as: 'Followings',  through: db.Follow, foreignKey: 'host' });
    db.User.belongsToMany(db.User, { as: 'Followers', through: db.Follow, foreignKey: 'follow' });
  }
}