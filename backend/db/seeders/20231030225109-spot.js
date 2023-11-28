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

        ownerId: 1,
        address: "1234 Lane Road",
        city: "Cityone",
        state: "Stateone",
        country: "Countryone",
        lat: 23.456453,
        lng: 45.456433,
        name: "Family House",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 1500

      },
      {
        ownerId: 2,
        address: "5678 Road Lane",
        city: "Citytwo",
        state: "Statetwo",
        country: "Countrytwo",
        lat: 34.65763,
        lng: 23.35521,
        name: "Party House",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 1000
      },
      {
        ownerId: 3,
        address: "91011 Rane Laad",
        city: "Citythree",
        state: "Statethree",
        country: "Countrythree",
        lat: 38.23436,
        lng: 37.35622,
        name: "Stone House",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 65
      },
      {
        ownerId: 1,
        address: "91011 Address Road",
        city: "Cityfour",
        state: "Statefour",
        country: "Countryfour",
        lat: 38.23436,
        lng: 37.35622,
        name: "Relaxing Getaway Home",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 2000
      },
      {
        ownerId: 2,
        address: "91011 Thing Lane",
        city: "Cityfive",
        state: "Statefive",
        country: "Countryfive",
        lat: 38.23436,
        lng: 37.35622,
        name: "Historic House",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 1000
      },
      {
        ownerId: 3,
        address: "91011 Place Avenue",
        city: "Citysix",
        state: "Statesix",
        country: "Countrysix",
        lat: 38.23436,
        lng: 37.35622,
        name: "Boat House",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 100
      },
      {
        ownerId: 4,
        address: "1213 Ocean View Street",
        city: "Cityseven",
        state: "Stateseven",
        country: "Countryseven",
        lat: 41.12345,
        lng: 21.34567,
        name: "Beachfront Villa",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 2500
      },
      {
        ownerId: 5,
        address: "1415 Mountain Retreat Lane",
        city: "Cityeight",
        state: "Stateeight",
        country: "Countryeight",
        lat: 36.98765,
        lng: 45.67890,
        name: "Mountain Cabin",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 1200
      },
      {
        ownerId: 6,
        address: "1617 Lakeside Avenue",
        city: "Citynine",
        state: "Statenine",
        country: "Countrynine",
        lat: 39.87654,
        lng: 32.10987,
        name: "Lake House Retreat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 1800
      },
      {
        ownerId: 1,
        address: "1819 Riverside Drive",
        city: "Cityten",
        state: "Stateten",
        country: "Countryten",
        lat: 37.56789,
        lng: 29.01234,
        name: "Riverside Retreat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 1500
      },
      {
        ownerId: 2,
        address: "2021 Hilltop Terrace",
        city: "Cityeleven",
        state: "Stateeleven",
        country: "Countryeleven",
        lat: 40.43210,
        lng: 31.65432,
        name: "Hillside Haven",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 1100
      },
      {
        ownerId: 3,
        address: "2223 Garden Grove Street",
        city: "Citytwelve",
        state: "Statetwelve",
        country: "Countrytwelve",
        lat: 35.67890,
        lng: 42.10987,
        name: "Garden Oasis",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 800
      },
      {
        ownerId: 4,
        address: "2425 Sunset Boulevard",
        city: "Citythirteen",
        state: "Statethirteen",
        country: "Countrythirteen",
        lat: 33.54321,
        lng: 28.76543,
        name: "Sunset View Retreat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 1800
      },
      {
        ownerId: 5,
        address: "2627 Forest Haven Lane",
        city: "Cityfourteen",
        state: "Statefourteen",
        country: "Countryfourteen",
        lat: 38.87654,
        lng: 25.43210,
        name: "Enchanted Forest Cottage",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 1300
      },
      {
        ownerId: 6,
        address: "2829 Serenity Street",
        city: "Cityfifteen",
        state: "Statefifteen",
        country: "Countryfifteen",
        lat: 36.10987,
        lng: 41.87654,
        name: "Tranquil Retreat",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 1600
      },
      {
        ownerId: 1,
        address: "3031 Harborview Drive",
        city: "Citysixteen",
        state: "Statesixteen",
        country: "Countrysixteen",
        lat: 37.98765,
        lng: 22.10987,
        name: "Harborview Haven",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 1900
      },
      {
        ownerId: 2,
        address: "3233 Skyline Terrace",
        city: "Cityseventeen",
        state: "Statseventeen",
        country: "Countryseventeen",
        lat: 39.65432,
        lng: 33.21098,
        name: "Skyline Sanctuary",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 1250
      },
      {
        ownerId: 3,
        address: "3435 Meadow Lane",
        city: "Cityeighteen",
        state: "Stateeighteen",
        country: "Countryeighteen",
        lat: 34.32109,
        lng: 36.54321,
        name: "Meadowside Cottage",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        price: 900
      }
    ], { validate: true })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Spots';
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(options, {
      city: {
        [Op.in]: ['Cityone', 'Citytwo', 'Citythree', 'Cityfour', 'Cityfive', 'Citysix', 'Cityseven', 'Cityeight', 'Citynine', 'Cityten', 'Cityeleven', 'Citytwelve', 'Citythirteen', 'Cityfourteen', 'Cityfifteen', 'Citysixteen', 'Cityseventeen', 'Cityeighteen']
      }
    }, {});
  }
};
