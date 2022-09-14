import Sequelize from 'sequelize';
const { INTEGER } = Sequelize;

export default class Sharepings extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: INTEGER.UNSIGNED,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      }
    }, {
      sequelize,
      timestamps: true,
      paranoid: false,
      underscored: true,
      modelName: 'Sharepings',
      tableName: 'SHAREPINGS',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
    db.Sharepings.belongsTo(db.User, { foreignKey: 'host', targetKey: 'id' });
    db.Sharepings.belongsTo(db.User, { foreignKey: 'guest', targetKey: 'id' });
    db.Sharepings.belongsTo(db.Mypings, { foreignKey: 'mypings', targetKey: 'id' });
  }
}