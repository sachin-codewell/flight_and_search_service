const { Airplane } = require('../models/index');

class AirplaneRepository {
  
  async createAirplane(newAirplaneData) {
    try {
      const data = await Airplane.create({
        id: newAirplaneData.id,
        modelName: newAirplaneData.modelName,
        capacity: newAirplaneData.capacity
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
