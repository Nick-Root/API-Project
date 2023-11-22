'use strict';

const { SpotImage } = require('../models')

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
    await SpotImage.bulkCreate([
      {
        spotId: 1,
        url: 'https://shorturl.at/aiyGY',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://shorturl.at/aiyGY',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://shorturl.at/aiyGY',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://shorturl.at/aiyGY',
        preview: false
      },
      {
        spotId: 1,
        url: 'https://shorturl.at/aiyGY',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://shorturl.at/clwKL',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://shorturl.at/clwKL',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://shorturl.at/clwKL',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://shorturl.at/clwKL',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://shorturl.at/clwKL',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://shorturl.at/qzEHK',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://shorturl.at/qzEHK',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://shorturl.at/qzEHK',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://shorturl.at/qzEHK',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://shorturl.at/qzEHK',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://shorturl.at/bJL07',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://shorturl.at/bJL07',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://shorturl.at/bJL07',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://shorturl.at/bJL07',
        preview: false
      },
      {
        spotId: 4,
        url: 'https://shorturl.at/bJL07',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://shorturl.at/dmOQ0',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://shorturl.at/dmOQ0',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://shorturl.at/dmOQ0',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://shorturl.at/dmOQ0',
        preview: false
      },
      {
        spotId: 5,
        url: 'https://shorturl.at/dmOQ0',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://shorturl.at/hit56',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://shorturl.at/hit56',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://shorturl.at/hit56',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://shorturl.at/hit56',
        preview: false
      },
      {
        spotId: 6,
        url: 'https://shorturl.at/hit56',
        preview: false
      },
    ], { validate: true })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'ReviewImages';
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(options, {
      url: { [Op.in]: ['https://shorturl.at/aiyGY', 'https://shorturl.at/clwKL', 'https://shorturl.at/qzEHK', 'https://shorturl.at/hit56', 'https://shorturl.at/bJL07', 'https://shorturl.at/dmOQ0'] }
    }, {});
  }
};
