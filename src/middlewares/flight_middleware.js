const { clientErrorsResponse } = require('../utils/http_codes')

function validateCreateFlight (req,res,next) {
    const newFlightData = req.body;
    if(
        !newFlightData.flightNumber ||
        !newFlightData.airplaneId ||
        !newFlightData.departureAirportId ||
        !newFlightData.arrivalAirportId ||
        !newFlightData.departureTime ||
        !newFlightData.arrivalTime ||
        !newFlightData.price 
    )
    {
        return res.status(clientErrorsResponse.BadRequest).json({
            success: false,
            data: [],
            error:{} ,
            message: "Not provided enough data to  create Flight"
        });

    }
    else {
        next();
    }
}

module.exports = {
    validateCreateFlight
}