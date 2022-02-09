const express = require('express');
const asyncHandler = require('express-async-handler')

const { Spot, SpotImage, Resort, ResortImage } = require('../../db/models');

const router = express.Router();

router.get('/',
    asyncHandler(async (req, res) => {
        const spots = await Spot.findAll({
            order: [["state", 'ASC']]
        });

        // adding in to get spot images
        const spotImages = await SpotImage.findAll();


        // adding in to get resorts
        const resorts = await Resort.findAll()

        // adding in to get resorts images
        const resortImages = await ResortImage.findAll();

        return res.json({
            spots,
            spotImages,
            resorts,
            resortImages
        })
    })
)


// get spots for specific user
router.get('/user',
    asyncHandler(async (req, res) => {

        const listings = await Spot.findAll({
            where: {
                userId: req.user.id
            },
            order: [["state", 'ASC']]
        })

         // adding in to get spot images
         const spotImages = await SpotImage.findAll();


         // adding in to get resorts
         const resorts = await Resort.findAll()

         // adding in to get resorts images
         const resortImages = await ResortImage.findAll();

        return res.json({
            listings,
            spotImages,
            resorts,
            resortImages
        })
    })
)

// add new spot
router.post('/user',
    asyncHandler(async(req, res) => {
        // need to pass in the user id
        const userId = req.user.id;
        const newSpotData = {...req.body, userId}

        const newSpot = await Spot.create(newSpotData)
        // return res.redirect('/api/spots/user');
    })
)


module.exports = router;
