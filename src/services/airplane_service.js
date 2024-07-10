const { v4: uuidv4 } = require('uuid');

const { AirplaneRepository } = require("../repositories/index");

class AirplaneService {

  constructor(AirplaneRepository) {
    //this.airplaneRepository = new AirplaneRepository();
    this.airplaneRepository = AirplaneRepository;

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

  async getAirplanes(filter) {
    try {
        const data = await this.airplaneRepository.getAirplanes(filter);
        return data;
    } catch (error) {
        console.log("something went worng in airplane service: getAirplanes");
        throw error;
    }
  }

  

}

module.exports = AirplaneService;
