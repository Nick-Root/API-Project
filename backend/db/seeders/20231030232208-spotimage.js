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
      { spotId: 7, url: 'https://shorturl.at/begAQ', preview: true },
      { spotId: 7, url: 'https://shorturl.at/begAQ', preview: false },
      { spotId: 7, url: 'https://shorturl.at/begAQ', preview: false },
      { spotId: 7, url: 'https://shorturl.at/begAQ', preview: false },
      { spotId: 7, url: 'https://shorturl.at/begAQ', preview: false },
      { spotId: 7, url: 'https://shorturl.at/begAQ', preview: false },

      { spotId: 8, url: 'https://shorturl.at/dnrHM', preview: true },
      { spotId: 8, url: 'https://shorturl.at/dnrHM', preview: false },
      { spotId: 8, url: 'https://shorturl.at/dnrHM', preview: false },
      { spotId: 8, url: 'https://shorturl.at/dnrHM', preview: false },
      { spotId: 8, url: 'https://shorturl.at/dnrHM', preview: false },
      { spotId: 8, url: 'https://shorturl.at/dnrHM', preview: false },

      { spotId: 9, url: 'https://shorturl.at/lqERV', preview: true },
      { spotId: 9, url: 'https://shorturl.at/lqERV', preview: false },
      { spotId: 9, url: 'https://shorturl.at/lqERV', preview: false },
      { spotId: 9, url: 'https://shorturl.at/lqERV', preview: false },
      { spotId: 9, url: 'https://shorturl.at/lqERV', preview: false },
      { spotId: 9, url: 'https://shorturl.at/lqERV', preview: false },

      { spotId: 10, url: 'https://shorturl.at/dnAEY', preview: true },
      { spotId: 10, url: 'https://shorturl.at/dnAEY', preview: false },
      { spotId: 10, url: 'https://shorturl.at/dnAEY', preview: false },
      { spotId: 10, url: 'https://shorturl.at/dnAEY', preview: false },
      { spotId: 10, url: 'https://shorturl.at/dnAEY', preview: false },
      { spotId: 10, url: 'https://shorturl.at/dnAEY', preview: false },

      { spotId: 11, url: 'https://shorturl.at/swyzF', preview: true },
      { spotId: 11, url: 'https://shorturl.at/swyzF', preview: false },
      { spotId: 11, url: 'https://shorturl.at/swyzF', preview: false },
      { spotId: 11, url: 'https://shorturl.at/swyzF', preview: false },
      { spotId: 11, url: 'https://shorturl.at/swyzF', preview: false },
      { spotId: 11, url: 'https://shorturl.at/swyzF', preview: false },

      { spotId: 12, url: 'https://tinyurl.com/4kvha9yb', preview: true },
      { spotId: 12, url: 'https://tinyurl.com/4kvha9yb', preview: false },
      { spotId: 12, url: 'https://tinyurl.com/4kvha9yb', preview: false },
      { spotId: 12, url: 'https://tinyurl.com/4kvha9yb', preview: false },
      { spotId: 12, url: 'https://tinyurl.com/4kvha9yb', preview: false },
      { spotId: 12, url: 'https://tinyurl.com/4kvha9yb', preview: false },

      { spotId: 13, url: 'https://tinyurl.com/2may49m3', preview: true },
      { spotId: 13, url: 'https://tinyurl.com/2may49m3', preview: false },
      { spotId: 13, url: 'https://tinyurl.com/2may49m3', preview: false },
      { spotId: 13, url: 'https://tinyurl.com/2may49m3', preview: false },
      { spotId: 13, url: 'https://tinyurl.com/2may49m3', preview: false },
      { spotId: 13, url: 'https://tinyurl.com/2may49m3', preview: false },

      { spotId: 14, url: 'https://tinyurl.com/jy9tu63u', preview: true },
      { spotId: 14, url: 'https://tinyurl.com/jy9tu63u', preview: false },
      { spotId: 14, url: 'https://tinyurl.com/jy9tu63u', preview: false },
      { spotId: 14, url: 'https://tinyurl.com/jy9tu63u', preview: false },
      { spotId: 14, url: 'https://tinyurl.com/jy9tu63u', preview: false },
      { spotId: 14, url: 'https://tinyurl.com/jy9tu63u', preview: false },

      { spotId: 15, url: 'https://tinyurl.com/y8d9pdfp', preview: true },
      { spotId: 15, url: 'https://tinyurl.com/y8d9pdfp', preview: false },
      { spotId: 15, url: 'https://tinyurl.com/y8d9pdfp', preview: false },
      { spotId: 15, url: 'https://tinyurl.com/y8d9pdfp', preview: false },
      { spotId: 15, url: 'https://tinyurl.com/y8d9pdfp', preview: false },
      { spotId: 15, url: 'https://tinyurl.com/y8d9pdfp', preview: false },

      { spotId: 16, url: 'https://tinyurl.com/mvh6bwjy', preview: true },
      { spotId: 16, url: 'https://tinyurl.com/mvh6bwjy', preview: false },
      { spotId: 16, url: 'https://tinyurl.com/mvh6bwjy', preview: false },
      { spotId: 16, url: 'https://tinyurl.com/mvh6bwjy', preview: false },
      { spotId: 16, url: 'https://tinyurl.com/mvh6bwjy', preview: false },
      { spotId: 16, url: 'https://tinyurl.com/mvh6bwjy', preview: false },

      { spotId: 17, url: 'https://tinyurl.com/yfhpewm2', preview: true },
      { spotId: 17, url: 'https://tinyurl.com/yfhpewm2', preview: false },
      { spotId: 17, url: 'https://tinyurl.com/yfhpewm2', preview: false },
      { spotId: 17, url: 'https://tinyurl.com/yfhpewm2', preview: false },
      { spotId: 17, url: 'https://tinyurl.com/yfhpewm2', preview: false },
      { spotId: 17, url: 'https://tinyurl.com/yfhpewm2', preview: false },

      { spotId: 18, url: 'https://tinyurl.com/5n8wh7ee', preview: true },
      { spotId: 18, url: 'https://tinyurl.com/5n8wh7ee', preview: false },
      { spotId: 18, url: 'https://tinyurl.com/5n8wh7ee', preview: false },
      { spotId: 18, url: 'https://tinyurl.com/5n8wh7ee', preview: false },
      { spotId: 18, url: 'https://tinyurl.com/5n8wh7ee', preview: false },
      { spotId: 18, url: 'https://tinyurl.com/5n8wh7ee', preview: false }
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
      url: { [Op.in]: ['https://shorturl.at/aiyGY', 'https://shorturl.at/clwKL', 'https://shorturl.at/qzEHK', 'https://shorturl.at/hit56', 'https://shorturl.at/bJL07', 'https://shorturl.at/dmOQ0', 'https://shorturl.at/begAQ', 'https://shorturl.at/dnrHM', 'https://shorturl.at/lqERV', 'https://shorturl.at/dnAEY', 'https://shorturl.at/swyzF', 'https://tinyurl.com/4kvha9yb', 'https://tinyurl.com/2may49m3', 'https://tinyurl.com/jy9tu63u', 'https://tinyurl.com/y8d9pdfp', 'https://tinyurl.com/mvh6bwjy', 'https://tinyurl.com/yfhpewm2', 'https://tinyurl.com/5n8wh7ee'] }
    }, {});
  }
};
