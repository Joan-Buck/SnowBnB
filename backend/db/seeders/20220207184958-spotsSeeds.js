'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Spots', [
    {
        userId: 1,
        address: "321 Mountain Drive",
        city: "Big Sky",
        state: "Montana",
        country: "United States",
        zipcode: "59716",
        name: "Big Sky Studio",
        price: 95.00,
        description: "Entire condo with a mountain view!",
        bedrooms: 1,
        bathrooms: 1,
        guests: 3,
        latitude: 45.28474756488971,
        longitude:-111.40162602631477,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        userId: 2,
        address: "11 Black Bear Way",
        city: "Big Sky",
        state: "Montana",
        country: "United States",
        zipcode: "59716",
        name: "Cozy ski cottage",
        price: 300.00,
        description: "Cozy cottage with plenty of space to enjoy a weekend on the slopes.",
        bedrooms: 1,
        bathrooms: 1.5,
        guests: 4,
        latitude: 45.287389526012966,
        longitude: -111.39951244580288,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        userId: 1,
        address: "15 E. Gondola Rd.",
        city: "Jackson",
        state: "Wyoming",
        country: "United States",
        zipcode: "83002",
        name: "Winter Retreat",
        price: 300.00,
        description: "Luxury retreat minutes from skiing and national park.",
        bedrooms: 4,
        bathrooms: 4,
        guests: 10,
        latitude: 43.48706029402663,
        longitude: -110.76180779392936,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        userId: 1,
        address: "55 Moutain Ridge Lane",
        city: "Whistler",
        state: "British Columbia",
        country: "Canada",
        zipcode: "VON 0A3",
        name: "Quiet Condo",
        price: 130.00,
        description: "Condominium in quiet neighborhood with fast internet and new appliances.",
        bedrooms: 2,
        bathrooms: 1,
        guests: 4,
        latitude: 50.07010246479342,
        longitude: -122.94664464168874,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        userId: 2,
        address: "12 Elk Avenue",
        city: "Truckee",
        state: "California",
        country: "United States",
        zipcode: "96160",
        name: "Family Friendly Lodge",
        price: 250.00,
        description: "Amazing View! Spacious and updated cabin in the mountains!",
        bedrooms: 2,
        bathrooms: 2,
        guests: 6,
        latitude: 39.358375885805756,
        longitude: -120.25769252243825,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        userId: 2,
        address: "7 Trout Road",
        city: "South Lake Tahoe",
        state: "California",
        country: "United States",
        zipcode: "96160",
        name: "Ski Chalet",
        price: 215.00,
        description: "Rustic chic chalet with amazing views of the mountains and Lake Tahoe.",
        bedrooms: 2,
        bathrooms: 2,
        guests: 4,
        latitude: 38.95276809755906,
        longitude: -119.95671399813749,
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
         userId: 3,
         address: "11 Lily Drive",
         city: "Taos",
         state: "New Mexico",
         country: "United States",
         zipcode: "87571",
         name: "Ski In/Ski Out",
         price: 425.00,
         description: "Cozy condo at the base of the ski resort!",
         bedrooms: 2,
         bathrooms: 2,
         guests: 6,
         latitude: 36.59622092811703,
         longitude: -105.44972572610129,
         createdAt: new Date(),
         updatedAt: new Date()

    },
    {
         userId: 3,
         address: "5243 Pinon Circle",
         city: "Taos",
         state: "New Mexico",
         country: "United States",
         zipcode: "87571",
         name: "Village Center Apartment",
         price: 180.00,
         description: "Spacious and relaxing apartment serves as the perfect mountain getaway.",
         bedrooms: 1,
         bathrooms: 1,
         guests: 3,
         latitude: 36.59550080496814,
         longitude: -105.45070666953873,
         createdAt: new Date(),
         updatedAt: new Date()

    },
    {
         userId: 3,
         address: "12 Moose Trail Road",
         city: "Breckenridge",
         state: "Colorado",
         country: "United States",
         zipcode: "80424",
         name: "Slopeside Condo",
         price: 300.00,
         description: "Enjoy picturesque views from the hot tub.",
         bedrooms: 3,
         bathrooms: 2,
         guests: 8,
         latitude: 39.48730281476924,
         longitude: -106.06693141949629,
         createdAt: new Date(),
         updatedAt: new Date()


    },
    {
         userId: 2,
         address: "7 Main Street",
         city: "Frisco",
         state: "Colorado",
         country: "United Stated",
         zipcode: "80443",
         name: "Main Street Abode",
         price: 200.00,
         description: "Enjoy the views of the surrounding mountains with the convenient location of downtown Frisco",
         bedrooms: 2,
         bathrooms: 2,
         guests: 4,
         latitude: 39.59245162902008,
         longitude: -106.09341967818354,
         createdAt: new Date(),
         updatedAt: new Date()
    }
   ]
, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Spots', null, {});
  }
};
