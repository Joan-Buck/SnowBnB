'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('ResortImages', [
    {
        resortId: 1,
        url: "https://www.skimag.com/wp-content/uploads/2020/03/20190411_jonresnick-118.jpg?crop=535:301&width=1070&enable=upscale",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        resortId: 2,
        url: "https://www.skimag.com/wp-content/uploads/2021/10/SKWY_01102020_132.jpg",
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        resortId: 3,
        url: "https://www.skimag.com/wp-content/uploads/2020/10/ski1120-rgw7-whistler-ericberger-1.jpg?crop=535:301&width=1070&enable=upscale",
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        resortId: 4,
        url: "https://www.skimag.com/wp-content/uploads/2021/10/coHeavenly-heavenly_20160322_rd_0021-web.jpg?width=730",
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        resortId: 5,
        url: "https://www.skimag.com/wp-content/uploads/2021/03/Vail_BackBowls.jpeg?width=730",
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        resortId: 6,
        url: "https://www.skimag.com/wp-content/uploads/2021/10/Liam_Doran-4580.jpg",
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        resortId: 7,
        url: "https://www.skimag.com/wp-content/uploads/2020/10/ski1018-rg-taos.jpg?width=730",
        createdAt: new Date(),
        updatedAt: new Date()

    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('ResortImages', null, {});
  }
};
