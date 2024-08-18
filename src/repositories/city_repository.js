
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

  async updateCity(cityId,updatedCityData) {
    try {
      const city = await City.update(updatedCityData,{
        where:{
          id: cityId
        }
      });
      return city;
    } 
    catch (error) {
      console.log("something went worng in city repo: updateCity");
      throw error;  
    }
  }

  async getCityByID(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } 
    catch (error) {
      console.log("something went worng in city repo: getCityById");
      throw error;  
    }
  }

  async getCities(filter) {
    try {
        let data;
        if(Object.keys(filter).length>0) {
            data = await City.findAll({
              
                where: {
                    name: {
                        [Op.like]: `%${filter.name}%`
                    }
                }
            })
        }
        else {
            data = await City.findAll();
        }
        return data;
    } 
    catch (error) {
        console.log("something went worng in city repo: getCities",error);
        throw error;
    }
  }

}

module.exports = CityRepository;