import Sequelize from 'sequelize';
const { TINYINT, STRING } = Sequelize;

export default class Category extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: TINYINT.UNSIGNED,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      cate_name: {
        type: STRING(30),
        allowNull: false,
        unique: true
      }
    }, {
      sequelize,
      timestamps: true,
      paranoid: false,
      underscored: true,
      modelName: 'Category',
      tableName: 'CATEGORY',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
    db.Category.hasMany(db.Mypings, { foreignKey: 'category', sourceKey: 'id' });
  }
}