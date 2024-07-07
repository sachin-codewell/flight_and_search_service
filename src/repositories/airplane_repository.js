const { airplane } = require('../models/index');

class AirplaneRepository {
  
  async createAirplane(newAirplaneDetails) {
    try {
        console.log(newAirplaneDetails);
      const data = await airplane.create({
        modelName: newAirplaneDetails.modelName,
        capacity: newAirplaneDetails.capacity,
      });
      return data;
    } catch (error) {
      console.log("something went worng in airplane repo: create");
      throw error;
    }
  }

  async deleteAirplane() {}

  async updateAirplane() {}

  async getAirplaneByID() {}

  async getAirplanes() {}

}

module.exports = AirplaneRepository;
