'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations here
    }
  }

  Team.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
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
    },
    {
      sequelize,
      modelName: 'Team',
      timestamps: true, // Enables createdAt and updatedAt
    }
  );

  return Team;
};
