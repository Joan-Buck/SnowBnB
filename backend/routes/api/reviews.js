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

const validateCreateReview = [
    check('content')
        .exists({ checkFalsy: true })
        .withMessage("Please submit a review.")
        .isLength({ max: 255 })
        .withMessage("Reviews must be no longer than 255 characters."),
    check('rating')
        .exists({ checkFalsy: true })
        .withMessage("Please rate your stay.")
        .isNumeric()
        .withMessage("Ratings must be 1-5."),
        handleValidationErrors
]

router.post('/',
    validateCreateReview,
    asyncHandler(async (req, res) => {
        const { content, rating, spotId } = req.body;
        const userId = req.user.id
        const newReviewData = {
            content,
            rating,
            spotId
        }

        const newReview = await Review.create({ content: content, rating: rating, userId: userId, spotId: spotId });
        const review = await Review.findByPk(newReview.id)
        return res.json({ review })
    })
)

router.put('/:reviewId',
    validateCreateReview,
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

router.delete('/:reviewId',
    asyncHandler(async (req, res) => {
        const { reviewId } = req.params;

        const review = await Review.findByPk(reviewId);
        review.destroy();
        return res.json({ id: review.id })
    })
)


module.exports = router;
