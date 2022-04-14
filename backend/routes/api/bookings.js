const express = require('express');
const asyncHandler = require('express-async-handler')
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Booking, User, Spot } = require('../../db/models');

const router = express.Router()

router.get('/',
    asyncHandler(async (req, res) => {
        const bookings = await Booking.findAll(
            { include: [User, Spot] })
        return res.json({ bookings });
    })
)


router.post('/',
    asyncHandler(async (req, res) => {
        // const { userId, spotId, startDate, endDate, numGuests } = req.body;
        // // const userId = req.user.id
        // const newBookingData = {
        //     userId,
        //     spotId,
        //     startDate,
        //     endDate,
        //     numGuests
        // }

        const newBooking = await Booking.create(req.body);
        const booking = await Booking.findByPk(newBooking.id,
            //     {
            //     include: [User, Spot]
            // }
        )
        return res.json({ booking })
    })
)

router.delete('/:bookingId',
    asyncHandler(async (req, res) => {
        const { bookingId } = req.params;

        const booking = await Booking.findByPk(bookingId);
        booking.destroy();
        return res.json({ id: booking.id })
    })
)


module.exports = router;
