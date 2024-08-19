
const db = require('../models/index')
const { Airport, City } = require('../models/index');

class AirportRepository {
    
  async getAirports() {
    try {
        const airports = await Airport.findAll();
        return airports
    } 
    catch (error) {
        console.log("something went worng in airport repo: getAirports", error);
        throw error;
    }
  }

}

module.exports = AirportRepository;