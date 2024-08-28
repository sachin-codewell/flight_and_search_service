const { v4:uuidv4} = require('uuid')


const { FlightRepository, AirplaneRepository } = require('../repositories/index')


class FlightService {

    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }
    async createFlight(newFlightData) {
        try {
            const airplane = await this.airplaneRepository.getAirplaneByID(newFlightData.airplaneId);
            const flight = await this.flightRepository.createFlight({
                id: uuidv4(),
                totalSeat: airplane?.dataValues?.capacity,
                ...newFlightData
            })
            return flight;
        } 
        catch (error) {
            console.log("something went wrong in flight servie: createFlight ");
            throw error; 
        }
    }

    async getFlights(filterData) {
        try {
            const flights = await this.flightRepository.getFlights(filterData);
            return flights;
        } 
        catch (error) {
            console.log("something went wrong in flight servie: createFlight ");
            throw error; 
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } 
        catch (error) {
            console.log("something went wrong in flight servie: createFlight ");
            throw error; 
        }
    }

}

module.exports = FlightService;