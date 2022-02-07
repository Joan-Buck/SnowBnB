'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('SpotImages', [
    {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/517e7fb1-9f08-4fa8-83ba-23d7cdcfa589.jpg?im_w=960",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 1,
        url: "https://a0.muscache.com/im/pictures/6871b9fb-7912-4e05-8409-a82d5dbeac88.jpg?im_w=720",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/45490817-7a9c-4f9e-97cb-6a1de219a2fb.jpg?im_w=960",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 2,
        url: "https://a0.muscache.com/im/pictures/c727d872-e93e-434d-b66a-aa8d3d672987.jpg?im_w=720",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-49569776/original/9df1eec9-cb37-4dd5-bc97-cc877e948ead.jpeg?im_w=1200",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 3,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-49569776/original/aac1b4ba-6fd2-4172-8056-ac4a24e70aa3.jpeg?im_w=1200",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/6370e850-cfbb-4363-a9be-28900936a358.jpg?im_w=1200",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 4,
        url: "https://a0.muscache.com/im/pictures/dfd0228b-0308-415b-96a6-5438d1016bec.jpg?im_w=960",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/c24044ec-a342-4c83-97d0-b9989d196295.jpg?im_w=960",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 5,
        url: "https://a0.muscache.com/im/pictures/774986d6-31f5-411e-8f3e-c22d3958b0f9.jpg?im_w=1200",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/4009932d-9a77-4c0e-a50e-4846bcbaf1ad.jpg?im_w=720",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 6,
        url: "https://a0.muscache.com/im/pictures/0e0edb15-acfb-4b6a-97b2-c3efe4e26415.jpg?im_w=1200",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53030762/original/c5b54ba1-2165-4df2-b27c-50c93a28883f.jpeg?im_w=1200",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 7,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53030762/original/db71c870-db5e-4d8c-a9dd-7fcf620b278d.jpeg?im_w=1200",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-31266787/original/e9bade23-b283-405d-8f81-3d90e4bb0597.jpeg?im_w=1200",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-31266787/original/b201beff-e6cd-45fd-ad6a-e576ba2c5f60.jpeg?im_w=720",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/ba6d1e23-7f55-44c1-9a4e-454d69a91403.jpg?im_w=1200",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 9,
        url: "https://a0.muscache.com/im/pictures/9e4c1f26-9376-42ed-b50d-b83b3211691b.jpg?im_w=1200",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/784bbecf-ad98-42cf-9efa-23a000b3cd9d.jpg?im_w=960",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        spotId: 10,
        url: "https://a0.muscache.com/im/pictures/e10285b7-87fc-4b55-985c-97912cbcbbb1.jpg?im_w=1200",
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
   return queryInterface.bulkDelete('SpotImages', null, {});
  }
};
