
const { City } = require('../models/index');

class CityRepository {
    
    async createCity(newCityData) {
        try {
            const data = await City.create(newCityData);
            return data;
        } 
        catch (error) {
            console.log('Something went wrong in city repo: create', error);
            throw error;
        }
    }

    async deleteCity(cityId) {
        try {
          const data = await City.destroy({
            where: {
              id: cityId,
            },
          });
          return data;
        } 
        catch (error) {
          console.log("something went worng in city repo: delete",error);
          throw error;
        }
      }

}

module.exports = CityRepository;