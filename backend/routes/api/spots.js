const express = require('express')
const { Spot, Review, User, SpotImage, Booking } = require('../../db/models');
const { requireAuth } = require('../../utils/auth')
const router = express.Router()



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

module.exports = router
