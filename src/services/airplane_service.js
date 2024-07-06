const { AirplaneRepository } = require('../repositories/index');

class AirplaneService {

    constructor() {
        this.airplaneRepository  = new AirplaneRepository;
    }
        
        async createAirplane(newAirplaneDetails) {
            try {
                const airplane = await airplaneRepository.createAirplane(newAirplaneDetails);
                return airplane;
            }
            catch(error) {
                console.log("something went wrong in airplane servie: createAirplane");
                throw error;
            }
        }
}

module.exports = AirplaneService;