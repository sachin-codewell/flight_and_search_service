const { AirplaneService } = require('../services/index');

const airplaneService = new AirplaneService();

async function createAirplane(req,res) {
    try {
        const newAirplaneData = req.body;
        const response = await airplaneService.createAirplane(newAirplaneData);
        return res.status(201).json({
            success: true,
            data: response,
            error: {},
            message: "airplane created sccessfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: {} ,
            error: {error},
            message: "airplane not created sccessfully"
        }) 
    }
}

module.exports = {
    createAirplane
};