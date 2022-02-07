const express = require('express');
const asyncHandler = require('express-async-handler')

// do I need require auth?
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot } = require('../../db/models');

const router = express.Router();

// get all spots in DB
router.get('/',
asyncHandler(async(req, res) => {
    const spots = await Spot.findAll();

    return res.json({
        spots
    })
})
)

module.exports = router;

