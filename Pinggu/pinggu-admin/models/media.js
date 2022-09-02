const Sequelize = require('sequelize');
const { INTEGER, STRING } = Sequelize;

module.exports = class Media extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      src: {
        type: STRING(100),
        allowNull: false,
        unique: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: true,
      modelName: 'Media',
      tableName: 'MEDIA',
      paranoid: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
  static associate(db) {
    db.Media.belongsTo(db.User, { foreignKey: 'user', targetKey: 'id' });
    db.Media.belongsTo(db.Post, { foreignKey: 'post', targetKey: 'id' });
  }
}