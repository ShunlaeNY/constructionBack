"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Operationtype extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.SiteOperationtype, { foreignKey: "operationtypesId" });
    }
  }
  Operationtype.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,

      color: {
        // type: DataTypes.STRING,
        type: DataTypes.ENUM(
          "red",
          "blue",
          "green",
          "orange",
          "lightblue",
          "lightgreen",
          "gray",
          "whitesmoke"
        ),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Operationtype",
    }
  );
  return Operationtype;
};
