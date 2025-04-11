"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SiteOperationtype extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Site, { foreignKey: "siteId" });
      this.belongsTo(models.Operationtype, { foreignKey: "operationtypesId" });
      this.hasOne(models.SiteOperationStaffVehicle, {
        foreignKey: "siteoperationtypesId",
      });
    }
  }
  SiteOperationtype.init({
    requiredStaff: DataTypes.INTEGER,
    requiredVehicle: DataTypes.INTEGER,
    workinghourStart: DataTypes.INTEGER,
    workinghourEnd: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'SiteOperationtype',
  });
  return SiteOperationtype;
};
