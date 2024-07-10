const { v4:uuidv4} = require('uuid')

class CityService {

    constructor(CityRepository) {
        this.cityRepository = CityRepository;
    }

    async createCity(newCityData) {
        try {
            const data = await this.cityRepository.createCity({id: uuidv4(), ...newCityData});
            return data;
        } 
        catch (error) {
            console.log('something went wrong in city service : createCity', error);
            throw error;
        }
    }
}

module.exports = CityService;