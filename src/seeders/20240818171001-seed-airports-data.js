'use strict';
const { v4:uuidv4} = require('uuid')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Airports',[
      {
        id: uuidv4(),
        name: "Lal Bahadur Shastri Airport",
        address: "Varanasi, Uttar Pradesh, India",
        cityId: "430773d7-d115-423c-84e6-750aa65966b4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: "Mulayam Singh yada Airport",
        address: "Thekma, Uttar Pradesh",
        cityId: "4c6f62d8-5128-49b6-868e-7f6ccb34c6c5",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      , {
        id: uuidv4(),
        name: "Chaudhary Charan Singh International Airport",
        address: "Alambagh, Lucknow UP",
        cityId: "75c7b026-64c7-451a-8f1c-f253ab7b35cb",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      , {
        id: uuidv4(),
        name: "Lucknow Airport",
        address: "Alambagh, Lucknow UP",
        cityId: "75c7b026-64c7-451a-8f1c-f253ab7b35cb",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: "Indira Gandhi International Airport",
        address: "New Delhi 110037",
        cityId: "00c81912-f977-41fa-8245-f76b31ecad39",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: "Kempegowda International Airport Bengaluru",
        address: "Karnatka",
        cityId: "9e5838f8-3f2f-4c56-988f-8509609431a2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        name: "Mangalore Airport ",
        address: "Banglore 500300",
        cityId: "9e5838f8-3f2f-4c56-988f-8509609431a2",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      

    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
