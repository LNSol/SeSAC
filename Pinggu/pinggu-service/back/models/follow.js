import Sequelize from 'sequelize';
const { INTEGER } = Sequelize;

export default class Follow extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      }
    }, {
      sequelize,
      underscored: true,
      timestamps: true,
      paranoid: false,
      modelName: 'Follow',
      tableName: 'FOLLOW',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  }
}