const { FlighService } = require('../services/index')

const flightService = new FlighService();

async function createFlight(req,res) {
    try { 
       let newFlightData = req.body;
       const result = await flightService.createFlight(newFlightData);
       return res.status(201).json({
        success: true,
        data: result,
        error: {},
        message: "Flight created successfully"
       }) 
    } 
    catch (error) {
        console.log('Something went wrong in flight controller: createFlight');
        return res.status(404).json({
            success: false,
            data: {},
            error: error,
            message: "Flight not created"
        });
    }
}

async function getFlights(req,res) {
    try { 
       let filterData = req.query;
       const result = await flightService.getFlights(filterData);
       return res.status(200).json({
        success: true,
        data: result,
        error: {},
        message: "Flight fetched successfully"
       }) 
    } 
    catch (error) {
        console.log('Something went wrong in flight controller: getFlights');
        return res.status(404).json({
            success: false,
            data: {},
            error: error,
            message: "something went wrong while fetching flights"
        });
    }
}

async function getFlight(req,res) {
    try { 
       const result = await flightService.getFlight(req.params.id);
       return res.status(200).json({
        success: true,
        data: result,
        error: {},
        message: "Flight fetched successfully"
       }) 
    } 
    catch (error) {
        console.log('Something went wrong in flight controller: getFlight');
        return res.status(404).json({
            success: false,
            data: {},
            error: error,
            message: "something went wrong while fetching flight"
        });
    }
}

async function updateSeatsInSpecificFlight(req,res) {
    try { 
       const flightId = req.params.id;
       const numberOfSeats = req.body.seats;
       const result = await flightService.updateSeatsInSpecificFlight(flightId,numberOfSeats);
       return res.status(200).json({
        success: true,
        data: result,
        error: {},
        message: "Flight seats updated successfully"
       }) 
    } 
    catch (error) {
        console.log('Something went wrong in flight controller: updateSeatsInSpecificFlight');
        return res.status(404).json({
            success: false,
            data: {},
            error: error,
            message: "something went wrong while updating seats in flight"
        });
    }
}

module.exports = {
    createFlight,
    getFlights,
    getFlight,
    updateSeatsInSpecificFlight
};