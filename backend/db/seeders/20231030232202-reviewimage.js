'use strict';

const { ReviewImage } = require('../models')

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
    await ReviewImage.bulkCreate([
      {
        reviewId: 1,
        url: 'img1.com'
      },
      {
        reviewId: 2,
        url: 'img2.com'
      },
      {
        reviewId: 3,
        url: 'img3.com'
      },
      {
        reviewId: 4,
        url: 'img4.com'
      },
      {
        reviewId: 5,
        url: 'img5.com'
      },
      {
        reviewId: 6,
        url: 'img6.com'
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
    options.tableName = 'ReviewImages';
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(options, {
      url: { [Op.in]: ['img1.com', 'img2.com', 'img3.com', 'img4.com', 'img5.com', 'img6.com'] }
    }, {});
  }
}
