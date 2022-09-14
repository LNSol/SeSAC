import Sequelize from 'sequelize';
const { INTEGER, STRING, TINYINT } = Sequelize;

export default class Mypings extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: INTEGER.UNSIGNED,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: STRING(30),
        allowNull: false,
        unique: true,
      },
      is_private: {
        type: TINYINT(1),
        allowNull: true,
        defaultValue: 0
      }
    }, {
      sequelize,
      timestamps: true,
      paranoid: false,
      underscored: true,
      modelName: 'Mypings',
      tableName: 'MYPINGS',
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  }
  static associate(db) {
    db.Mypings.belongsTo(db.User, { foreignKey: 'user', targetKey: 'id' });
    db.Mypings.hasMany(db.Post, { foreignKey: 'mypings', sourceKey: 'id' });
    db.Mypings.belongsTo(db.Category, { foreignKey: 'category', targetKey: 'id' });
    db.Mypings.hasMany(db.Sharepings, { foreignKey: 'mypings', sourceKey: 'id' });
  }
}