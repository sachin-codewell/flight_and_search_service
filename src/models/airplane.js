'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  airplane.init({
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true
    },  
    modelNumber: {
      type: DataTypes.NUMBER,
      allowNull: false,
    }, 
    capacity: {
      type: DataTypes.NUMBER,
      allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'airplane',
  });
  return airplane;
};