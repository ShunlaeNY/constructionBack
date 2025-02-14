"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Group, { foreignKey: "groupId" });
      this.belongsTo(models.Group, { foreignKey:'groupId' });
      this.hasOne(models.SiteOperationStaffVehicle, { foreignKey :'vehicleId' });
    }
  }
  Vehicle.init(
    {
      name: DataTypes.STRING(255),
      image: DataTypes.STRING(255),
      status: DataTypes.STRING(100),
      inspectionExpiry: DataTypes.DATE,
      insuranceExpiry: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Vehicle",
    }
  );
  return Vehicle;
};
