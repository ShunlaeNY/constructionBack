'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SiteOperationStaffVehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Staff, { foreignKey : 'staffId'});
      this.belongsTo(models.Vehicle, { foreignKey : 'vehicleId'});
      this.belongsTo(models.SiteOperationtype, { foreignKey : 'siteoperationtypesId'});
    }
  }
  SiteOperationStaffVehicle.init({
    
  }, {
    sequelize,
    modelName: 'SiteOperationStaffVehicle',
  });
  return SiteOperationStaffVehicle;
};