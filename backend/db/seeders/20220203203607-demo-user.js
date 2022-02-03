'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [{
     email: 'demo@user.io',
     username: 'Demo-User',
     hashedPassword: bcrypt.hashSync('password')
   },
   {
    email: 'user1@user.io',
    username: 'Demo-User1',
    hashedPassword: bcrypt.hashSync('password2')
  },
  {
    email: 'user2@user.io',
    username: 'Demo-User2',
    hashedPassword: bcrypt.hashSync('password3')
  }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
     const Op = Sequelize.Op;
   return queryInterface.bulkDelete('Users', {
     username: { [Op.in] : ['Demo-User', 'Demo-User1', 'Demo-User2']}
   }, {});
  }
};
