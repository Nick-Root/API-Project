const express = require('express')
const { Spot, Review, User, SpotImage, Booking, ReviewImage } = require('../../db/models');
const { requireAuth } = require('../../utils/auth')
const router = express.Router()

//err middleware for checking spots
const checkSpotDetails = (req, res, next) => {
    let errors = []

    if (!req.body.address) errors.push("Street address is required")
    if (!req.body.city) errors.push("City is required")
    if (!req.body.state) errors.push("State is required")
    if (!req.body.country) errors.push("Country is required")
    if (!req.body.lat) errors.push("Latitude is not valid")
    if (!req.body.lng) errors.push("Longitude is not valid")
    if (!req.body.name) errors.push("Name must be less than 50 characters")
    if (!req.body.description) errors.push("Description is required")
    if (!req.body.price) errors.push("Price per day is required")

    if (errors.length > 0) {
        const err = new Error('Validation Error')
        err.statusCode = 400
        err.errors = errors
        return next(err)
    }
    next()
}

//Get all spots
router.get('/', async (req, res) => {
    // const allSpots = await Spot.findAll()

    //get avg rating
    const spots = await Spot.findAll({
        include: [Review, SpotImage],
    })

    let addedPropSpots = spots.map(async (spot) => {
        let reviews = spot.toJSON().Reviews
        let starRatings = []
        let reviewArr = []

        reviews.forEach(review => {
            let rating = review.stars
            starRatings.push(rating)
            reviewArr.push(reviews)
        });
        let sum = starRatings.reduce((prevNum, currNum) => prevNum + currNum, 0)
        let avgRating = parseFloat((sum / starRatings.length).toFixed(2))
        spot.avgRating = avgRating
        const spotImage = await SpotImage.findOne({ where: { spotId: spot.id } })
        if (spotImage) {
            spot.previewImage = spotImage.url;
        }
        let rdel = spot.toJSON()
        delete rdel.Reviews
        delete rdel.SpotImages
        return rdel
    });

    addedPropSpots = await Promise.all(addedPropSpots)

    res.json({
        "Spots": addedPropSpots
    })
})


//Get all Spots owned by CU
router.get('/current', requireAuth, async (req, res) => {
    const currentId = req.user.id
    const spots = await Spot.findAll({
        where: {
            ownerId: currentId,
        },
        include: [Review, SpotImage]
    })
    let addedPropSpots = spots.map(async (spot) => {
        let reviews = spot.toJSON().Reviews
        let starRatings = []
        let reviewArr = []

        reviews.forEach(review => {
            let rating = review.stars
            starRatings.push(rating)
            reviewArr.push(reviews)
        });
        let sum = starRatings.reduce((prevNum, currNum) => prevNum + currNum, 0)
        let avgRating = parseFloat((sum / starRatings.length).toFixed(2))
        spot.avgRating = avgRating
        const spotImage = await SpotImage.findOne({ where: { spotId: spot.id } })
        if (spotImage) {
            spot.previewImage = spotImage.url;
        }
        let rdel = spot.toJSON()
        delete rdel.Reviews
        delete rdel.SpotImages
        return rdel
    });

    addedPropSpots = await Promise.all(addedPropSpots)

    res.json({
        "Spots": addedPropSpots
    })
})


router.get('/:spotId', async (req, res) => {
    let spot = await Spot.findByPk(req.params.spotId)
    if (!spot) res.status(404).json({ message: "Spot couldn't be found" })
    spot = spot.toJSON()

    //numReviews
    const revs = await Review.findAll({
        where: { spotId: spot.id }
    })
    const numRevs = revs.length

    //avgRating
    let starRatings = []
    revs.forEach((review) => {
        starRatings.push(review.stars)
    })
    let sum = 0
    starRatings.forEach((rating) => {
        sum += rating
    })

    const avgRating = Number((sum / starRatings.length).toFixed(2))

    const spotImage = await SpotImage.findAll({ where: { spotId: spot.id }, attributes: ['id', 'url', 'preview'] })

    const owner = await User.findByPk(spot.ownerId, { attributes: ['id', 'firstName', 'lastName'] })

    if (spotImage.length) spot.previewImage = spotImage[0].url
    spot.numReviews = numRevs
    spot.avgRating = avgRating
    spot.SpotImages = spotImage
    spot.Owner = owner

    res.json(spot)
})

//create a new spot

router.post('/', checkSpotDetails, requireAuth, async (req, res) => {
    const userId = req.user.id
    const { address, city, state, country, lat, lng, name, description, price } = req.body
    const newSpot = await Spot.create({
        ownerId: userId,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
    })
    let spot = newSpot.toJSON()
    // delete spot.avgRating
    // delete spot.previewImage
    res.status(201).json(spot)
})


//create image for a spot

router.post('/:spotId/images', requireAuth, async (req, res) => {
    const spot = await Spot.findByPk(req.params.spotId)
    const { url, preview } = req.body
    if (!spot) {
        res.status(404).json({
            message: "Spot couldn't be found",
        })
    }
    if (spot.ownerId !== req.user.id) {
        res.status(400).json({
            message: "Validation error"
        })
    }
    if (preview === true) {
        spot.previewImage = url
        await spot.save()
    }
    const newSpotImage = await spot.createSpotImage({
        url, preview
    })
    newSpotImage.toJSON().url = url
    newSpotImage.toJSON().preview = preview
    let img = { id: newSpotImage.id, url, preview }
    await newSpotImage.save()
    res.status(200).json(img)
})

//edit a spot

router.put('/:spotId', checkSpotDetails, requireAuth, async (req, res) => {
    const spot = await Spot.findByPk(req.params.spotId)
    const { address, city, state, country, lat, lng, name, description, price } = req.body
    const { user } = req
    if (!spot) {
        res.status(404).json({
            message: "Spot couldn't be found",
        })
    }
    if (spot.ownerId !== user.id) {
        res.status(400).json({
            message: "Bad Request"
        })
    }

    spot.address = address
    spot.city = city
    spot.state = state
    spot.country = country
    spot.lat = lat
    spot.lng = lng
    spot.name = name
    spot.description = description
    spot.price = price


    await spot.save()
    res.status(200).json(spot)
})


//delete a spot

router.delete('/:spotId', requireAuth, async (req, res) => {
    let spot = await Spot.findByPk(req.params.spotId)
    let { user } = req
    if (!spot) {
        res.status(404).json({
            message: "Spot could not be found."
        })
    }
    if (spot.ownerId !== user.id) {
        res.status(400).json({
            message: "Bad Request"
        })
    } else {
        await spot.destroy()
        res.status(200).json({
            message: "Successfully deleted"
        })
    }
})


//Get all reviews by a Spot's id

router.get('/:spotId/reviews', async (req, res) => {
    let spot = await Spot.findByPk(req.params.spotId)

    if (!spot) {
        res.status(404).json({ message: "Spot couldn't be found" })
    }

    const reviews = await Review.findAll({
        where: { spotId: spot.id },
        include: [{
            model: User, attributes: ['id', 'firstName', 'lastName']
        }, {
            model: ReviewImage,
            attributes: ['id', 'url']
        }]
    })
    res.status(200).json({ Reviews: reviews })
})



// create a review for a spot based on spotId

router.post('/:spotId/reviews', requireAuth, async (req, res) => {
    let spot = await Spot.findByPk(req.params.spotId)

    if (!spot) {
        res.status(404).json({ message: "Spot couldn't be found" })
    }

    const { spotId, review, stars } = req.body
    const { user } = req

    const reviews = await Review.findAll({
        where: { userId: user.id }
    })

    let currRev = false
    reviews.forEach(review => {
        let revJ = review.toJSON()
        if (revJ.spotId == spot.id) {
            currRev = true
        }
    })

    let errors = []
    if (!review) errors.push("Review text is required")
    if (!stars) errors.push("Stars must be an integer from 1 to 5")
    if (errors.length) {
        res.status(400).json({ message: "Validation error", errors })
    }

    if (currRev) {
        res.status(500).json({ message: "User already has a review for this spot" })
    } else {
        const newRev = await spot.createReview({
            userId: user.id,
            spotId, review, stars
        })
        res.status(201).json(newRev)
    }

})

// get all current bookings by spotId
router.get('/:spotId/bookings', requireAuth, async (req, res) => {
    let spot = await Spot.findByPk(req.params.spotId)
    const { user } = req

    if (!spot) {
        res.status(404).json({ message: "Spot couldn't be found" })
    }

    if (spot.ownerId === user.id) {
        const allBookings = await Booking.findAll({
            where: { spotId: spot.id },
            include: { model: User, attributes: ['id', 'firstName', 'lastName'] }
        })
        res.status(200).json({ Bookings: allBookings })
    }
    if (spot.ownerId !== user.id) {
        const allBookings = await Booking.findAll({
            where: { spotId: spot.id },
            attributes: ['spotId', 'startDate', 'endDate']
        })
        res.status(200).json({ Bookings: allBookings })
    }
})

//create a booking based in a spotId
router.post('/:spotId/bookings', requireAuth, async (req, res) => {
    const { user } = req
    const userId = user.id

    const spot = await Spot.findByPk(req.params.spotId)
    const body = req.body
    // console.log(spot)
    if (!spot) {
        res.status(404).json({ message: "Spot couldn't be found" })
    }

    if (spot.ownerId === user.id) {
        res.status(403).json({ message: "You cannot make a booking for a spot you own" })
    }
    const bookings = await Booking.findAll({
        where: {
            spotId: spot.id
        }
    })
    // console.log(bookings)
    let newStart = new Date(body.startDate)
    let newEnd = new Date(body.endDate)
    let currTimes = []
    for (currBooking of bookings) {
        currTimes.push(currBooking.startDate)
        currTimes.push(currBooking.endDate)
        if (currBooking.userId === userId && currBooking.startDate == newStart && currBooking.endDate == newEnd && currTimes.includes(currBooking.startDate) && currTimes.includes(currBooking.endDate)) {
            res.status(403).json({ message: "You already have a booking for this spot of those dates" })
        }
    }
    console.log(currTimes)

    body.userId = userId
    body.spotId = spot.id
    // console.log(body)
    const newBooking = await Booking.create(body)
    res.json(newBooking)
})

module.exports = router
