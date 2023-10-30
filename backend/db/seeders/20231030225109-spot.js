'use strict';

const { Spot } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await Spot.bulkCreate([
      {

        owenerId: 1,
        address: "1234 Lane Road",
        city: "Cityone",
        state: "Stateone",
        country: "Countryone",
        lat: 23.456453,
        lng: 45.456433,
        name: "Cool Spot",
        description: "A pretty cool spot",
        price: 1500

      },
      {
        owenerId: 2,
        address: "5678 Road Lane",
        city: "Citytwo",
        state: "Statetwo",
        country: "Countrytwo",
        lat: 34.65763,
        lng: 23.35521,
        name: "Alright Spot",
        description: "A pretty alright spot",
        price: 1000
      },
      {
        owenerId: 3,
        address: "91011 Rane Laad",
        city: "Citythree",
        state: "Statethree",
        country: "Countrythree",
        lat: 64.23436,
        lng: 97.35622,
        name: "Lame Spot",
        description: "A pretty lame spot",
        price: 5000
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};