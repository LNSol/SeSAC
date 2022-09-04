import Sequelize from 'sequelize';
const { STRING, INTEGER, TEXT } = Sequelize;

export default class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: INTEGER,
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
      location_abs: {
        type: STRING(100),
        allowNull: false,
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
      paranoid: false,
      underscored: true,
      modelName: 'Post',
      tableName: 'POST',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  }
  static associate(db) {
    
  }
}