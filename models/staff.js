'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.UserTypes, { foreignKey: 'usertypesId' });
      this.belongsTo(models.Team, { foreignKey: 'teamId' });
      this.belongsToMany(models.Skill, {
        through: 'StaffSkills', // Same join table name
        foreignKey: 'staffId',
        otherKey: 'skillId',
      });
      this.hasMany(models.Businesspartner, { foreignKey: 'staffId' });
      this.hasOne(models.Site, { foreignKey: 'staffId' });
      this.hasOne(models.SiteOperationStaffVehicle, { foreignKey :'staffId' });
      
    }
  }
  Staff.init({
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    image: DataTypes.STRING(255),
    email: {
      type: DataTypes.STRING(255),
      unique: true
    },
    password: DataTypes.STRING(255),
    address: DataTypes.STRING(255),
    phoneNumber: DataTypes.STRING,
    employmentStatus: DataTypes.STRING(100),
    workingStatus: DataTypes.STRING(100),
    position: DataTypes.STRING(100),
    dob: DataTypes.DATE,
    joinedDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Staff',
  });
  return Staff;
};