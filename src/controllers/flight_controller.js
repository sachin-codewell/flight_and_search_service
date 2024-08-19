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

module.exports = {
    createFlight
};