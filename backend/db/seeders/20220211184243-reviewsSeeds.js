'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Reviews',
      [
        {
          userId: 1,
          spotId: 2,
          content: 'This was the perfect place for a weekend getaway! Loved cozying up by the fire after a long day on the mountain.',
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          spotId: 5,
          content: 'My family enjoyed our stay here, but it was a little far from the resort. Our Tesla did not handle the road conditions well, it would have been good to have more information on the road conditions beforehand.',
          rating: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          spotId: 1,
          content: 'This was an awesome stay!! So close to the mountain and with a great view. Really felt like we got away from it all.',
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 2,
          spotId: 3,
          content: 'This is a beautiful home and so close to all the amazing activities in Jackson! We saw moose in our backyard one morning and had very easy access to skiing and the national park. We already booked our trip here for next year!',
          rating: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          spotId: 1,
          content: 'We had some communication issues regarding check-in, but other than that it was a fantastic stay. The host was traveling when we were checking in casuing the issues, they were very communicative otherwise.',
          rating: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 3,
          spotId: 3,
          content: 'This was the vacation house of our dreams! The house and location are amazing and comfortable. This was a great location for access to Jackson Hole and having a great space to relax in after a long day skiing.',
          rating: 5,
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
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
