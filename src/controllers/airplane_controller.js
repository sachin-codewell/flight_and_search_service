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

async function updateAirplane(req,res) {
    try {
        const result = await airplaneService.getAirplanes(req.body)
        return res.status(200).json({
            success: true,
            data: result,
            error: {},
            message: "Updated airplanes details"
        })
    } 
    catch (error) {
        return res.status(404).json({
            success: false,
            data: {} ,
            error: error,
            message: "Something went wrong"
        }) 
    }
  }


async function getAirplaneByID(req,res) {
    try {
        const result = await airplaneService.getAirplanes(req.params.id)
        return res.status(200).json({
            success: true,
            data: result,
            error: {},
            message: "Airplanes with specified id fetched successfully"
        })
    } 
    catch (error) {
        return res.status(404).json({
            success: false,
            data: {} ,
            error: error,
            message: "Airplane with specified id not exist"
        }) 
    }
  }

async function getAirplanes(req,res) {
    try {
        const filterdata = req.query;
        console.log(filterdata);
        const result = await airplaneService.getAirplanes(filterdata)
        return res.status(200).json({
            success: true,
            data: result,
            error: {},
            message: "All Airplanes fetched successfully"
        })
    } 
    catch (error) {
        return res.status(404).json({
            success: false,
            data: {} ,
            error: error,
            message: "Unable to fetch Airplanes"
        }) 
    }
}  

module.exports = {
    createAirplane,
    deleteAirplane,
    getAirplanes,
    getAirplaneByID,
    updateAirplane
};