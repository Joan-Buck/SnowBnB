'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Resorts', [
    {
        name: "Big Sky Resort",
        snowLevel: "46 in.",
        downhillSkiing: true,
        nordicSkiing: true,
        snowboarding: true,
        snowshoeing: true,
        apresSki: true,
        resortURL:"https://bigskyresort.com/",
        state: "Montana",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Jackson Hole Mountain Resort",
        snowLevel: "255 in.",
        downhillSkiing: true,
        nordicSkiing: true,
        snowboarding: true,
        snowshoeing: true,
        apresSki: true,
        resortURL:"https://www.jacksonhole.com/",
        state: "Wyoming",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Whistler Blackcomb",
        snowLevel: "243 cm.",
        downhillSkiing: true,
        nordicSkiing: false,
        snowboarding: true,
        snowshoeing: true,
        apresSki: true,
        resortURL:"https://www.whistlerblackcomb.com/",
        state: "British Columbia",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Heavenly Mountain Resort",
        snowLevel: "175 in.",
        downhillSkiing: true,
        nordicSkiing: false,
        snowboarding: true,
        snowshoeing: false,
        apresSki: true,
        resortURL:"https://www.skiheavenly.com/",
        state: "California",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Northstar California Resort",
        snowLevel: "84 in.",
        downhillSkiing: true,
        nordicSkiing: true,
        snowboarding: true,
        snowshoeing: true,
        apresSki: true,
        resortURL:"https://www.northstarcalifornia.com/",
        state: "California",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Vail Mountain",
        snowLevel: "152 in.",
        downhillSkiing: true,
        nordicSkiing: true,
        snowboarding: true,
        snowshoeing: true,
        apresSki: true,
        resortURL:"https://www.vail.com/",
        state: "Colorado",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Breckenridge Ski Resort",
        snowLevel: "162 in.",
        downhillSkiing: true,
        nordicSkiing: true,
        snowboarding: true,
        snowshoeing: true,
        apresSki: true,
        resortURL:"https://www.breckenridge.com/",
        state: "Colorado",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Taos Ski Valley",
        snowLevel: "75 in.",
        downhillSkiing: true,
        nordicSkiing: false,
        snowboarding: false,
        snowshoeing: false,
        apresSki: true,
        resortURL: "https://www.skitaos.com/",
        state: "New Mexico",
        createdAt: new Date(),
        updatedAt: new Date()
    }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Resorts', null, {});
  }
};
