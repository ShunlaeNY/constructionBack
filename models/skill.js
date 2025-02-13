'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    static associate(models) {
      // 🔹 Ensure we define the through table
      Skill.belongsToMany(models.Staff, {
        through: 'StaffSkills', // Name of the join table
        foreignKey: 'skillId',
        otherKey: 'staffId',
      });
    }
  }

  Skill.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Skill',
    }
  );

  return Skill;
};
