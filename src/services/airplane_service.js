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
    } catch (error) {
      console.log("something went wrong in airplane servie: createAirplane");
      throw error;
    }
  }
}

module.exports = AirplaneService;
