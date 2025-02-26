'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Businesspartner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Staff, { foreignKey: 'staffId' });
      this.hasOne(models.Site, { foreignKey: 'businesspartnerId' });
    }
  }
  Businesspartner.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    image: DataTypes.TEXT("long"),
    email: {
      type: DataTypes.STRING(255),
      unique: true
    },
    address: DataTypes.STRING(255),
    phonenumber: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Businesspartner',
  });
  return Businesspartner;
};