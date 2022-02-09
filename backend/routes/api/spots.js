const express = require('express');
const asyncHandler = require('express-async-handler')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

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

// create new spot validation middleware

const validateCreateSpot = [
    check('name')
        .exists({ checkFalsy: true })
        .withMessage("Please give your new listing a name.")
        .isLength({ max: 255 })
        .withMessage("Names must be no longer than 255 characters."),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage("Please briefly describe your listing.")
        .isLength({ max: 255 })
        .withMessage("Descriptions must be no longer than 255 characters."),
    check('address')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a street address for your listing.")
        .isLength({ max: 100 })
        .withMessage("Street addresses must be no longer than 100 characters."),
    check('state')
        .exists({ checkFalsy: true })
        .isLength({ min: 3 })
        .withMessage("Please provide the full state name."),
    check('zipcode')
        .exists({ checkFalsy: true })
        .isLength({ min: 5 })
        .withMessage("Please provide a zipcode."),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage("Please provide the country where your listing is located")
        .isLength({ max: 50 })
        .withMessage("Countries must be no longer than 50 characters."),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage("Please provide a price per night.")
        .isDecimal()
        .withMessage("Please provide a price per night."),
    check('bedrooms')
        .exists({ checkFalsy: true })
        .withMessage("Please provide the number of bedrooms for your listing.")
        .isNumeric()
        .withMessage("Please provide the number of bedrooms for your listing."),
    check('bathrooms')
        .exists({ checkFalsy: true })
        .withMessage("Please provide the number of bathrooms for your listing.")
        .isNumeric()
        .withMessage("Please provide the number of bathrooms for your listing."),
    check('guests')
        .exists({ checkFalsy: true })
        .withMessage("Please confirm the number of guests your listing can host")
        .isNumeric()
        .withMessage("Please confirm the number of guests your listing can host"),
    check('url')
        .exists({ checkFalsy: true })
        .withMessage("Please provide an image URL to display on your listing."),
        // .isURL()
        // .withMessage("Please provide an image URL to display on your listing."),
    handleValidationErrors
]


// add new spot
router.post('/',
    // validateCreateSpot,
    asyncHandler(async (req, res) => {
        const { name, description, address, city, state, zipcode, country, price, bedrooms, bathrooms, guests, imageURL } = req.body;
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

        const newSpot = await Spot.create(newSpotData);

        const newImageData = {
            spotId: newSpot.id,
            url: imageURL
        }

        const newImage = await SpotImage.create(newImageData);

        // re render not redirect
            // add to frontend
        // res.redirect('/api/spots/user');

        return res.json({
            newSpot
        })
    })
)


module.exports = router;
