'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Bookings', [
      {
        spotId: 2,
        userId: 1,
        startDate: new Date('May 17, 2022 12:00:00'),
        endDate: new Date('May 20, 2022 12:00:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 5,
        userId: 1,
        startDate: new Date('April 24, 2022 12:00:00'),
        endDate: new Date('April 25, 2022 12:00:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        spotId: 1,
        userId: 1,
        startDate: new Date('June 10, 2022 12:00:00'),
        endDate: new Date('June 17, 2022 12:00:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Bookings', null, {});
  }
};
