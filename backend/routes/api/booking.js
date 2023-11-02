const express = require('express')
const { Spot, Review, User, SpotImage, Booking, ReviewImage } = require('../../db/models');
const { requireAuth } = require('../../utils/auth')
const router = express.Router()
const { Op } = require("sequelize")
//get all CU bookings
router.get('/current', requireAuth, async (req, res) => {
    const { user } = req
    const currUserBookings = await Booking.findAll({
        where: { userId: user.id },
        include: {
            model: Spot, attribute: [
                'id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price', 'previewImage'
            ]
        }
    })
    res.status(200).json({ Bookings: currUserBookings })
})

// edit a booking
router.put('/:bookingId', requireAuth, async (req, res, next) => {
    let booking = await Booking.findByPk(req.params.bookingId)
    if (!booking) {
        res.statusCode = 404
        return res.json({ message: "Booking couldn't be found" })
    }
    const update = req.body

    if (req.user.id !== booking.userId) {
        res.statusCode = 400
        return res.json({ message: 'Bad Request' })
    }

    const currDate = new Date()

    if (booking.startDate < currDate) {
        res.statusCode = 403
        res.json({ "message": "Past bookings can't be modified" })
    }

    booking.startDate = update.startDate || booking.startDate
    booking.endDate = update.endDate || booking.endDate
    booking.updatedAt = currDate

    const startTime = booking.startDate.getTime()
    const endTime = booking.endDate.getTime()
    if (startTime >= endTime) {
        res.status(400).json({
            message: "Sorry, this spot is already booked for the specified dates", errors: {
                endDate: "endDate cannot be on or before startDate"
            }
        })
        err.errors = {};
        return next(err);
    }

    const bookings = await Booking.findAll({
        where: {
            spotId: booking.spotId,
            [Op.not]: booking.id
        }
    })
    const errors = {}
    for (const existingBooking of bookings) {
        const existingStart = existingBooking.startDate.getTime()
        const existingEnd = existingBooking.endDate.getTime()

        if (startTime >= existingStart && startTime <= existingEnd) {
            errors.startDate = "Start date conflicts with an existing booking"
        }
        if (endTime >= existingStart && endTime <= existingEnd) {
            errors.endDate = "End date conflicts with an existing booking"
        }
        if (startTime <= existingStart && endTime >= existingEnd) {
            errors.startDate = "Start date conflicts with an existing booking"
            errors.endDate = "End date conflicts with an existing booking"
        }
    }
    if (errors.startDate || errors.endDate) {
        return res.status(403).json({
            message: "Sorry, this spot is already booked for the specified dates", errors
        })

    }


    await booking.validate()
    await booking.save()
    res.status(200).json(booking)

})
//delete a booking
router.delete("/:bookingId", requireAuth, async (req, res) => {
    const booking = await Booking.findByPk(req.params.bookingId)
    const { user } = req

    if (!booking) res.status(404).json({ message: "Booking couldn't be found" })

    if (booking.userId !== user.id) res.status(403).json({ message: "Forbidden" })

    const startDate = booking.startDate
    const currDate = new Date()
    console.log(startDate, currDate)
    if (startDate <= currDate) res.status(403).json({ message: "Bookings that have already started can't be deleted" })

    await booking.destroy()
    res.status(200).json({ message: "Successfully deleted" })
})
module.exports = router
