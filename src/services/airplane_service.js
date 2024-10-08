const { v4: uuidv4 } = require('uuid');

const { AirplaneRepository } = require("../repositories/index");

class AirplaneService {

  constructor() {
    this.airplaneRepository = new AirplaneRepository();
  }

  async createAirplane(newAirplaneData) {
    try {
      newAirplaneData = {id:uuidv4(), ...newAirplaneData} ; 
      const data = await this.airplaneRepository.createAirplane(newAirplaneData);
      return data;
    } 
    catch (error) {
      console.log("something went wrong in airplane servie: createAirplane");
      throw error;
    }
  }

  async deleteAirplane(airplaneId) {
    try {
        const data = await this.airplaneRepository.deleteAirplane(airplaneId);
        return data;
    } catch (error) {
        console.log("something went wrong in airplane servie: deleteAirplane");
        throw error;    
    }
  }

  async updateAirplane(airplaneData) {
    try {
      const {airplaneId, ...updatedAirplaneData} = airplaneData;
      const airplane = await this.airplaneRepository.updateAirplane(airplaneId,updatedAirplaneData);
      return airplane;
    } 
    catch (error) {
      console.log("something went worng in airplane service: updateAirplane");
      throw error;  
    }
  }

  async getAirplaneByID(airplaneId) {
    try {
      const airplane = await this.airplaneRepository.getAirplaneByID(airplaneId)
      return airplane;
    } 
    catch (error) {
      console.log("something went worng in airplane service: getAirplaneById");
      throw error;  
    }
  }

  async getAirplanes(filterData) {
    try {
        const airplanes = await this.airplaneRepository.getAirplanes(filterData);
        return airplanes;
    } catch (error) {
        console.log("something went worng in airplane service: getAirplanes");
        throw error;
    }
  }

  

}

module.exports = AirplaneService;
