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

    async getFlight(flightId) {
        try {
            const flight = await Flight.findByPk(flightId)
            return flight
        } catch (error) {
            console.log("something went worng in flight repo: getFlights");
            throw error
        }
    }

    async updateSeatsInSpecificFlight(flightId,numberOfSeats,dec=true) {
        try {
            let flight = await Flight.findByPk(flightId);
            if(dec){
                await flight.decrement('totalSeat', {by: numberOfSeats});
            }
            else{
                await flight.increment('totalSeat', {by: numberOfSeats});
            }
            flight = await flight.save(A);
            return flight;
        } 
        catch (error) {
            console.log("something went worng in flight repo: getFlights",error);
            throw error
        }
    }


 }

module.exports = FlightRepository;