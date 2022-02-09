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
            order: [["updatedAt", 'DESC']]
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
        const {name, description, address, city, state, zipcode, country, price, bedrooms, bathrooms, guests, imageURL } = req.body;
        // need to pass in the user id
        const userId = req.user.id;
        const newSpotData = {
            name,
            description,
            address,
            city,
            state,
            zipcode,
            country,
            price,
            bedrooms,
            bathrooms,
            guests,
            userId
        }

        const newSpot = await Spot.create(newSpotData)

        const allSpots = await Spot.findAll();

        // let spotId = allSpots.length;

        const newImageData = {
            // need to get spot id
            spotId: newSpot.id,
            url: imageURL
        }

        const newImage = await SpotImage.create(newImageData)
        // return res.redirect('/api/spots/user');
    })
)


module.exports = router;
