import Sequelize from 'sequelize';
const { STRING, INTEGER, TEXT, TINYINT } = Sequelize;

export default class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: INTEGER.UNSIGNED,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: STRING(100),
        allowNull: false,
      },
      content: {
        type: TEXT,
        allowNull: true,
      },
      longitude: {
        type: STRING(50),
        allowNull: false,
      },
      latitude: {
        type: STRING(50),
        allowNull: false,
      },
      hits: {
        type: INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      is_private: {
        type: TINYINT(1),
        allowNull: true,
        defaultValue: 0,
      }
    }, {
      sequelize,
      timestamps: true,
      paranoid: false,
      underscored: true,
      modelName: 'Post',
      tableName: 'POST',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  }
  static associate(db) {
    db.Post.belongsTo(db.User, { foreignKey: 'user', targetKey: 'id' });
    db.Post.belongsTo(db.Mypings, { foreignKey: 'mypings', targetKey: 'id' });
  }
}