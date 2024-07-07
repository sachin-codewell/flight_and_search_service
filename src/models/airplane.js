'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    id: {
      allowNull: false,
      type: DataTypes.STRING,
      primaryKey: true
    },  
    modelName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    capacity: {
      type: DataTypes.NUMBER,
      allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};