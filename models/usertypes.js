'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserTypes.hasMany(models.Staff, {
        foreignKey: 'usertypesId'
      });
    }
  }
  UserTypes.init({
    name: DataTypes.STRING,
    color: {
      // type: DataTypes.STRING,
      type: DataTypes.ENUM(
        'red',
        'blue',
        'green',
        'orange',
        'lightblue',
        'lightgreen',
        'gray',
        'whitesmoke'
      ),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'UserTypes',
    timestamps: true, // for createdAt and updatedAt
  });
  return UserTypes;
};