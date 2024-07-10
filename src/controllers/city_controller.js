const { CityRepository } = require('../repositories/index');
const { CityService } = require('../services/index')

const cityRepository = new CityRepository();
const cityService = new CityService(cityRepository);

async function createCity(req,res) {
    try { 
        let newCityData = req.body;
       const result = await cityService.createCity(newCityData);
       return res.status(201).json({
        success: true,
        data: result,
        error: {},
        message: "City created successfully"
       }) 
    } 
    catch (error) {
        console.log('Something went wrong in city controller: createCity',error);
        return res.status(404).json({
            success: false,
            data: {},
            error: error,
            message: "City not created"
        });
    }
}

async function deleteCity(req,res) {
    try {
        const result = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            success: true,
            data: result,
            error: {},
            message: "city deleted sccessfully"
        })
    } 
    catch (error) {
        return res.status(400).json({
            success: false,
            data: {} ,
            error: {error},
            message: "city not deleted"
        }) 
    }
}

module.exports = {
    createCity,
    deleteCity
}