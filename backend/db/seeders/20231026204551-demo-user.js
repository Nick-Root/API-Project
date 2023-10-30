'use strict';

const { User } = require('../models');
const bcrypt = require("bcryptjs");


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await User.bulkCreate([
      {
        email: 'demo@user.com',
        firstName: 'Demo',
        lastName: 'User',
        username: 'Demolisher',
        hashedPassword: bcrypt.hashSync('demopass')
      },
      {
        email: 'email@email.email',
        firstName: 'Email',
        lastName: 'Man',
        username: 'Emailman',
        hashedPassword: bcrypt.hashSync('hashedpass')
      },
      {
        email: 'onesix@gmail.com',
        firstName: 'One',
        lastName: 'Six',
        username: 'OneSix',
        hashedPassword: bcrypt.hashSync('password')
      }
    ], { validate: true })
  },

  async down(queryInterface, Sequelize) {

    options.tableName = 'Users';
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lisher', 'username'] }
    }, {});
  }
};
