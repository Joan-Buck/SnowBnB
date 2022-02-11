const express = require('express');
const asyncHandler = require('express-async-handler')

const { Resort, ResortImage } = require('../../db/models');

const router = express.Router();

router.get('/',
    asyncHandler(async (req, res) => {

        const resorts = await Resort.findAll({
            include: { model: ResortImage }
        })

        return res.json({
            resorts
        })
    })
)

module.exports = router;
