'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Site extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Businesspartner,{ foreignKey: 'businesspartnerId'})
      this.belongsTo(models.Staff,{ foreignKey: 'staffId'})

      this.hasOne(models.SiteOperationtype, { foreignKey: 'siteId' })
    }
  }
  Site.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address: DataTypes.STRING(255),
    status: DataTypes.STRING(255),
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Site',
  });
  return Site;
};