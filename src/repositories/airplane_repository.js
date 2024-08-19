const { Op } = require('sequelize')
const { QueryTypes } = require('sequelize');



const { Airplane } = require("../models/index");

class AirplaneRepository {
  async createAirplane(newAirplaneData) {
    try {
      const data = await Airplane.create({
        id: newAirplaneData.id,
        modelName: newAirplaneData.modelName,
        capacity: newAirplaneData.capacity,
      });
      return data;
    } 
    catch (error) {
      console.log("something went worng in airplane repo: create");
      throw error;
    }
  }

  async deleteAirplane(airplaneId) {
    try {
      const data = await Airplane.destroy({
        where: {
          id: airplaneId,
        },
      });
      console.log('deleted data',data);
      return data;
    } 
    catch (error) {
      console.log("something went worng in airplane repo: delete");
      throw error;
    }
  }

  async updateAirplane(airplaneId,updatedAirplaneData) {
    try {
      const airlane = await Airplane.update(updatedAirplaneData,{
        where:{
          id: airplaneId
        }
      });
      return airlane;
    } 
    catch (error) {
      console.log("something went worng in airplane repo: updateAirplane");
      throw error;  
    }
  }

  async getAirplaneByID(airplaneId) {
    try {
      const airplane = await Airplane.findByPk(airplaneId)
      return airplane; 
    } 
    catch (error) {
      console.log("something went worng in airplane repo: getAirplaneById");
      throw error;  
    }
  }

  async getAirplanes(filter) {
    try {
        let airplanes;
        if(Object.keys(filter).length>0) {
            airplanes = await Airplane.findAll({
                where: {
                    modelName: {
                        [Op.like]: `%${filter.modelName}%`
                    }
                }
            })
        }
        else {
            airplanes = await Airplane.findAll();
        }
        return airplanes;
    } 
    catch (error) {
        console.log("something went worng in airplane repo: getAirplanes",error);
        throw error;
    }
  }
  

}

module.exports = AirplaneRepository;
