'use strict';
const { Booking } = require('../models')

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
    await Booking.bulkCreate([
      {
        spotId: 3,
        userId: 1,
        startDate: '2020-05-23',
        endDate: '2020-05-30'
      },
      {
        spotId: 1,
        userId: 2,
        startDate: '2020-11-03',
        endDate: '2020-11-10'
      },
      {
        spotId: 2,
        userId: 3,
        startDate: '2023-11-27',
        endDate: '2023-12-04'
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
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(options, {
      startDate: { [Op.in]: ['12/05/23', '11/03/23', '11/27/23'] }
    }, {});
  }
};
