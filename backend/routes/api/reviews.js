const express = require('express');
const asyncHandler = require('express-async-handler')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Spot, Review, User } = require('../../db/models');

const router = express.Router()

router.get('/',
    asyncHandler(async (req, res) => {
        const reviews = await Review.findAll({
            include: [User, Spot]
        })
        return res.json({ reviews });
    })
)

router.post('/',
    asyncHandler(async (req, res) => {
        console.log(req.body)

        const { content, rating, spotId } = req.body;
        const userId = req.user.id

        const newReviewData = {
            content,
            rating,
            spotId
        }
        // add in spot Id to newReview create
        const newReview = await Review.create({ content: content, rating: rating, userId: userId, spotId: spotId });
        const review = await Review.findByPk(newReview.id)
        return res.json({ review })
    })
)

router.put('/:reviewId',
    asyncHandler(async (req, res) => {
        const { reviewId } = req.params;

        const { content, rating, userId, spotId } = req.body;

        const editedReviewData = {
            content,
            rating,
            userId,
            spotId
        }

        const review = await Review.findByPk(reviewId)

        await review.update({ ...editedReviewData })

        return res.json({ review })
    })
)


module.exports = router;
