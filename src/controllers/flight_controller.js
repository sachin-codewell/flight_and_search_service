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

module.exports = {
    createFlight,
    getFlights
};