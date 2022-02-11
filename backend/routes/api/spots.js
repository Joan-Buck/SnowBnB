const express = require('express');
const asyncHandler = require('express-async-handler')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Spot, SpotImage, Resort, ResortImage } = require('../../db/models');

const router = express.Router();

router.get('/',
    asyncHandler(async (req, res) => {
        const spots = await Spot.findAll({ include: { model: SpotImage } });
        return res.json({ spots })
    })
)


router.get('/:spotId',
    asyncHandler(async (req, res) => {
        const { spotId } = req.params;
        const spot = await Spot.findByPk(spotId, { include: SpotImage })
        return res.json({ spot })
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
    check('imageURL')
        .exists({ checkFalsy: true })
        .withMessage("Please provide an image URL to display on your listing."),
    handleValidationErrors
]


// add new spot
router.post('/',
    validateCreateSpot,
    asyncHandler(async (req, res) => {
        const { name, description, address, city, state, zipcode, country, price, bedrooms, bathrooms, guests, imageURL } = req.body;
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
        await SpotImage.create({ spotId: newSpot.id, url: imageURL });

        const spot = await Spot.findByPk(newSpot.id, { include: SpotImage })
        return res.json({ spot })
    })
)

// edit spot
router.put('/:spotId',
validateCreateSpot,
    asyncHandler(async (req, res) => {
        const { spotId } = req.params;

        const { name, description, address, city, state, zipcode, country, price, bedrooms, bathrooms, guests, imageURL } = req.body;

        const editedSpotData = {
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
            guests
        }

        // TODO: MAKE UPDATING WORK
        const spot = await Spot.findByPk(spotId, { include: SpotImage })

        // TODO: DEBUG THIS -- NEED TO UPDATE THE SPOT IMAGE
        // delete image and replace it with new image
        await spot.update({ ...editedSpotData })
        const spotImage = spot.SpotImages[0]
        if (spotImage) {
            spotImage.update({url: imageURL})
        }

        // await spot.update({ spotId: spot.id, url: imageURL })

        return res.json({ spot })
    })
)

// delete spot
router.delete('/:spotId',
    asyncHandler(async (req, res) => {
        const { spotId } = req.params;
        const spot = await Spot.findByPk(spotId, { include: SpotImage });
        spot.SpotImages.forEach(image => image.destroy())
        spot.destroy();
        return res.json({ id: spot.id });
    })
)


module.exports = router;
