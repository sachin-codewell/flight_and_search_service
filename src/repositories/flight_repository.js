const { Flight } = require('../models/index');
const { Op } = require('sequelize')

class FlightRepository {

    #createFilter(filterData) {
        let filter = {}
        if(filterData.flightNumber) {
            filter.flightNumber = filterData.flightNumber;
        }
        if(filterData.departureAirportId) {
            filter.departureAirportId = filterData.departureAirportId;
        }
        if(filterData.arrivalAirportId) {
            filter.arrivalAirportId = filterData.arrivalAirportId;
        }
        if(filterData.maxPrice&&filterData.minPrice) {
            Object.assign(filter,  {price: {[Op.lte]: filterData.maxPrice,[Op.gte]: filterData.minPrice}});
        }
        else if(filterData.maxPrice) {
            Object.assign(filter, {price: {[Op.lte]: filterData.maxPrice}});
        }
        else if(filterData.minPrice) {
            Object.assign(filter, {price: {[Op.gte]: filterData.minPrice}})
        }
        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flight.create(data);
            return flight;
        } 
        catch (error) {
            console.log("something went worng in flight repo: createFlight");
            throw error
        }
    }

    async getFlights(filterData) {
        try {
            let filter = this.#createFilter(filterData);
            console.log(filter);
            const flights = await Flight.findAll({
                where: filter       
            })
            return flights
        } catch (error) {
            console.log("something went worng in flight repo: getFlights");
            throw error
        }
    }
}

module.exports = FlightRepository;