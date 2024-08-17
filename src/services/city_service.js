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

    async deleteCity(cityId) {
        try {
            const data = await this.cityRepository.deleteCity(cityId);
            return data;
        } catch (error) {
            console.log("something went wrong in city servie: deleteCity",error);
            throw error;    
        }
    }

    async updateCity(cityData) {
        try {
          const {cityId, ...updatedCityData} = cityData;
          const city = await this.cityRepository.updateCity(cityId,updatedCityData);
          return city;
        } 
        catch (error) {
          console.log("something went worng in city service: updateAirplane");
          throw error;  
        }
      }
    
    async getCityByID(cityId) {
    try {
        const city = await this.cityRepository.getCityByID(cityId)
        return city;
    } 
    catch (error) {
        console.log("something went worng in city service: getCityById");
        throw error;  
    }
    }
    
    async getCities(filter) {
    try {
        const data = await this.cityRepository.getCities(filter);
        return data;
    } catch (error) {
        console.log("something went worng in city service: getCities");
        throw error;
    }
    }

}

module.exports = CityService;