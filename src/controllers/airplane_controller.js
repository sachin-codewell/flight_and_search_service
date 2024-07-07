const { AirplaneService } = require('../services/index');

const airplaneService = new AirplaneService();

async function createAirplane(req,res) {
    try {
        const newAirplaneData = req.body;
        const result = await airplaneService.createAirplane(newAirplaneData);
        return res.status(201).json({
            success: true,
            data: result,
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

async function deleteAirplane(req,res) {
    try {
        const result = await airplaneService.deleteAirplane(req.params.id);
        return res.status(200).json({
            success: true,
            data: result,
            error: {},
            message: "airplane deleted sccessfully"
        })
    } 
    catch (error) {
        return res.status(400).json({
            success: false,
            data: {} ,
            error: {error},
            message: "airplane not found sccessfully"
        }) 
    }
}

module.exports = {
    createAirplane,
    deleteAirplane
};