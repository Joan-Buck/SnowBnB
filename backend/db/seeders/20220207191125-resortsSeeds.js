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
        latitude: 45.28665222155472,
        longitude: -111.40141548537159,
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
        latitude: 43.587615219245606,
        longitude: -110.82773591159574,
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
        latitude: 50.1229976701414,
        longitude: -122.94933568321393,
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
        latitude: 38.9350978355825,
        longitude: -119.94027770191016,
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
        latitude: 39.27471727691649,
        longitude: -120.1210397577264,
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
        latitude: 39.606823624111605,
        longitude: -106.35650305859252,
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
        latitude: 39.48297042420353,
        longitude: -106.06809374447839,
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
        latitude: 36.5956495328794,
        longitude: -105.44992994537118,
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
