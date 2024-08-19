const { AirportService } = require('../services/index')

const airportService = new AirportService();

async function getAirports(req,res) {
    try {
        const result = await airportService.getAirports();
        return res.status(200).json({
            success: true,
            data: result,
            error: {},
            message: "All Airports fetched successfully"
        })
    } 
    catch (error) {
        return res.status(404).json({
            success: false,
            data: {} ,
            error: error,
            message: "Unable to fetch Airports"
        }) 
    }
}  

module.exports = {
    getAirports
}