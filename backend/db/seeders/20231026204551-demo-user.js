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
      },
      {
        email: 'hello@gmail.com',
        firstName: 'Alex',
        lastName: 'Random',
        username: 'AlexR23',
        hashedPassword: bcrypt.hashSync('alexpass')
      },
      {
        email: 'james@email.email',
        firstName: 'James',
        lastName: 'Null',
        username: 'JNull465',
        hashedPassword: bcrypt.hashSync('jamespass')
      },
      {
        email: 'twotwelve@gmail.com',
        firstName: 'Two',
        lastName: 'Twelve',
        username: 'TT212',
        hashedPassword: bcrypt.hashSync('ttpassword')
      }
    ], { validate: true })
  },

  async down(queryInterface, Sequelize) {

    options.tableName = 'Users';
    const Op = Sequelize.Op;

    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demolisher', 'Emailman', 'OneSix', 'AlexR23', 'JNull465', 'TT212'] }
    }, {});
  }
};
