const { AirplaneRepository } = require("../repositories/index");

class AirplaneService {

  constructor() {
    this.airplaneRepository = new AirplaneRepository();
  }

  async createAirplane(newAirplaneDetails) {
    try {
      const data = await this.airplaneRepository.createAirplane(
        newAirplaneDetails
      );
      return data;
    } catch (error) {
      console.log("something went wrong in airplane servie: createAirplane");
      throw error;
    }
  }
}

module.exports = AirplaneService;
