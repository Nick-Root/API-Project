router.get("/", async (req, res) => {
    let errorResult = { errors: [], }
    let { page, size, lat, lng, price } = req.query

    page = parseInt(page);
    size = parseInt(size);

    let query = {
        where: {},
        include: []
    }

    if (Number.isNaN(page) || page === '') page = 1;
    if (Number.isNaN(size) || size === '') size = 20;
    if (page > 10) page = 10;
    if (size > 20) size = 20;

    //error handling
    if (page < 0) errorResult.errors.push("Page must be greater than or equal to 0")
    if (req.query.size < 0) errorResult.errors.push("Size must be greater than or equal to 0")
    if (req.query.lat) {
        if (req.query.lat < -90) errorResult.errors.push("Minimum latitude is invalid")
        if (req.query.lat > 90) errorResult.errors.push("Maximum latitude is invalid")
        query.where.lat = {
            [Op.substring]: lat
        }
    }
    if (req.query.lng) {
        if (req.query.lng < -180) errorResult.errors.push("Minimum longitude is invalid")
        if (req.query.lng > 180) errorResult.errors.push("Maximum longitude is invalid")
        query.where.lat = {
            [Op.substring]: lng
        }
    }
    if (req.query.price < 0) errorResult.errors.push("Price must be greater than or equal to 0")

    if (errorResult.errors.length > 0) {
        res.status(400).json({
            message: "Validation Error",
            statusCode: 400,
            errors: errorResult.errors
        })
    }

    // queries

    const spots = await Spot.findAll({
        ...query,
        limit: size,
        offset: (page - 1) * size,
        include: { model: Review }
    })

    //getting avgRating for each

    let finalSpots = spots.map(spot => {
        let reviews = spot.toJSON().Reviews
        let starRatings = []
        let reviewArr = []

        reviews.forEach(review => {
            let rating = review.stars
            starRatings.push(rating)
            reviewArr.push(reviews)
        });
        let sumRatings = starRatings.reduce((prevNum, currNum) => prevNum + currNum, 0)
        let avgRating = parseFloat((sumRatings / starRatings.length).toFixed(2))
        spot.avgRating = avgRating
        let j = spot.toJSON()
        delete j.Reviews
        return j
    });

    return res.status(200).json({
        spots: finalSpots,
        page,
        size
    })


})
