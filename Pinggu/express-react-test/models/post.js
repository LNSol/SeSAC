const Sequelize = require('sequelize');
const { INTEGER, STRING, TEXT } = Sequelize;

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      title: {
        type: STRING(100),
        allowNull: false,
      },
      content: {
        type: TEXT,
        allowNull: true,
      },
      location_abs: {
        type: STRING(100),
        allowNull: true,
      },
      mypings: {
        type: INTEGER,
        allowNull: true,
      },
      hits: {
        type: INTEGER,
        allowNull: true,
        defaultValue: 0
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Post',
      tableName: 'POST',
      charset: 'utf8',
      collate: 'utf8mb4'
    });
  }
  static associate(db) {
    db.Post.belongsTo(db.User, { foreignKey: 'user', targetKey: 'id' });
  }
};