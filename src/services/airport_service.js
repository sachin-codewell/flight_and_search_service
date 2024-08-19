const { AirportRepository} = require('../repositories/index')

class AirportService {

    constructor() {
        this.airportRepository = new AirportRepository()
    }
    
    async getAirports(filter) {
    try {
        const airports = await this.airportRepository.getAirports();
        return airports;
    } catch (error) {
        console.log("something went worng in airport service: getAirports");
        throw error;
    }
    }

}

module.exports = AirportService;