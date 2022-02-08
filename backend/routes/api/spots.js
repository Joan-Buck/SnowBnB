const express = require('express');
const asyncHandler = require('express-async-handler')

// do I need require auth?
// const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot, SpotImage, Resort, ResortImage } = require('../../db/models');

const router = express.Router();

// get all spots in DB
router.get('/',
asyncHandler(async(req, res) => {
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

module.exports = router;
