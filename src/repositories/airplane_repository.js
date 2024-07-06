const airplane = require('../models/airplane');
const { airplane } = require('../models/index');

class AirplaneRepository {

    constructor(){
        this.airpaneModel = airplane;
    }

    async createAirplane(newAirplaneDetails) {
        try {
            const airplane = await this.airpaneModel.create({
                name: newAirplaneDetails.name,
                capacity: newAirplaneDetails.capacity
            })
            return airplane;
        }
        catch(error) {
            console.log("something went worng in airplane repo: create");
            throw error;
        }
    }

    async deleteAirplane() {

    }

    async updateAirplane() {

    }

    async getAirplaneByID() {

    }

    async getAirplanes() {

    }
} 

module.exports = AirplaneRepository;