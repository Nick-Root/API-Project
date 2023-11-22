import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { spotDetailsFetch, spotUpdate } from "../../store/spots";
import './UpdateSpot.css'


function UpdateSpot() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { spotId } = useParams()

    const spot = useSelector((state) => state.spots.currSpot)

    const [country, setCountry] = useState(spot.country)
    const [address, setAddress] = useState(spot.address)
    const [city, setCity] = useState(spot.city)
    const [state, setState] = useState(spot.state)
    const [lat, setLat] = useState(spot.lat)
    const [lng, setLng] = useState(spot.lng)
    const [description, setDescription] = useState(spot.description)
    const [name, setName] = useState(spot.name)
    const [price, setPrice] = useState(spot.price)
    const [prevImg, setPrevImg] = useState(spot.prevImg || "")
    const [imgTwo, setImgTwo] = useState(spot.imgTwo || "")
    const [imgThree, setImgThree] = useState(spot.imgThree || "")
    const [imgFour, setImgFour] = useState(spot.imgFour || "")
    const [imgFive, setImgFive] = useState(spot.imgFive || "")
    const [errors, setErrors] = useState([])


    useEffect(() => {
        dispatch(spotDetailsFetch(spotId))
    }, [dispatch, spotId])

    useEffect(() => {
        setCountry(spot.country || "")
        setAddress(spot.address || "")
        setCity(spot.city || "")
        setState(spot.state || "")
        setLat(spot.lat || 0)
        setLng(spot.lng || 0)
        setDescription(spot.description || "")
        setName(spot.name || "")
        setPrice(spot.price || "")
        setPrevImg(spot.prevImg || "")
        setImgTwo(spot.imgTwo || "")
        setImgThree(spot.imgThree || "")
        setImgFour(spot.imgFour || "")
        setImgFive(spot.imgFive || "")
    }, [spot])

    // if (!spot) return null
    // if (!spot.SpotImages) return null

    function validateInputs() {
        // e.preventDefault()
        const errs = []
        console.log("Validate is running")
        if (!country) errs.push("Country is required")
        if (!address) errs.push("Address is required")
        if (!city) errs.push("City is required")
        if (!state) errs.push("State is required")
        if (lat < -90 || lat > 90 || !lat) errs.push("Valid Latitude is required")
        if (lng < -180 || lng > 180 || !lat) errs.push("Valid Longitude is required")
        if (description.length < 30) errs.push("Description must be at least 30 characters")
        if (!name) errs.push("Title is required")
        if (!price) errs.push("Price is required")
        if (!prevImg) errs.push("Preview image is required")
        setErrors(errs)
        // return errors.length === 0
    }

    const handleUpdate = async (e) => {
        e.preventDefault()

        if (errors.length === 0) {
            const updatedSpot = {
                country,
                address,
                city,
                state,
                lat,
                lng,
                description,
                name,
                price
            }

            const res = await dispatch(spotUpdate(updatedSpot, spot.id))

            if (res) {
                navigate(`/spots/${res.id}`)
            } else {
                const errs = await res.json()
                return errs
            }
        }
    }
    // const prevImg = spot.previewImage
    return (
        <div className='formContainer'>
            <form className='updateSpotForm' onSubmit={handleUpdate}>
                <div className='firstBox'>
                    <div className='formText'>
                        <h1 className='udtHeader'>Update a Spot</h1>
                        <h2>Wheres your place located?</h2>
                        <p>Guests will only get your exact address once they booked a reservation</p>
                    </div>
                    <label>
                        <p className='locaInputs'>Country</p>

                        {errors.find((error) => error.includes("Country"))}
                        <input
                            type='text'
                            placeholder="Country"
                            id='inputUpdate'
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        ></input>

                    </label>
                    <label>
                        <p className='locaInputs'>Address</p>

                        {errors.find((error) => error.includes("Address"))}
                        <input
                            type='text'
                            placeholder='Address'
                            id='inputUpdate'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        ></input>

                    </label>
                    <label className="citystate">
                        <p className='locaInputs'>City</p>
                        {errors.find((error) => error.includes("Address", "State"))}
                        <input
                            type='text'
                            placeholder="City"
                            id='inputUpdate'
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        ></input>
                        <p className='locaInputs'>State</p>

                        <input
                            type='text'
                            placeholder="State"
                            id="inputUpdate"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        ></input>

                    </label>
                    <label className="latlng">
                        <p className='locaInputs'>Latitude</p>

                        {errors.find((error) => error.includes("Latitude"))}
                        <input
                            type='text'
                            placeholder="Latitude"
                            id="inputUpdate"
                            value={lat}
                            onChange={(e) => setLat(e.target.value)}
                        ></input>
                        <p className='locaInputs'>Longitude</p>

                        {errors.find((error) => error.includes("Longitude"))}
                        <input
                            type='text'
                            placeholder="Longitude"
                            id="inputUpdate"
                            value={lng}
                            onChange={(e) => setLng(e.target.value)}
                        ></input>
                    </label>
                </div>
                <div className='descriptionBox'>
                    <h2>Describe your place to guests</h2>
                    <p>Mention the best features of your space, any special amentities like fast wifi or parking, and what you love about the neighborhood</p>
                    {errors.find((error) => error.includes("Description"))}
                    <p className='locaInputs'>Description</p>
                    <textarea
                        type='textarea'
                        placeholder="Please write at least 30 characters"
                        id="inputUpdate"
                        className="descriptionUpdate"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className='titleBox'>
                    <h2>Create a title for your spot</h2>
                    <p>Catch guests attention with a spot title that highlights what makes your place special.</p>
                    <p className='locaInputs'>Title</p>
                    {errors.find((error) => error.includes("Title"))}
                    <input
                        type='text'
                        placeholder="Name of your spot"
                        id='inputUpdate'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div className="priceBox">
                    <h2>Set a base price for your spot</h2>
                    <p>Competitive pricing can help your listing stand out and rank higher in search results.</p>
                    {errors.find((error) => error.includes("Price"))}
                    <p className='locaInputs'>Price</p>
                    <div className='priceDiv'>
                        $ <input
                            type="text"
                            placeholder="Price per night(USD)"
                            id='inputUpdate'
                            className="priceInput"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div className='updateImgs'>
                    <h2>Liven up your spot with photos</h2>
                    <p>Submit a link to at least one photo to publish your spot</p>
                    {errors.find((error) => error.includes("Preview"))}
                    {errors.find((error) => error.includes("Image"))}
                    <p className='locaInputs'>Preview Image</p>
                    <input
                        type='text'
                        placeholder="Preview Image URL"
                        id='inputUpdate'
                        value={spot.previewImage}
                        onChange={(e) => setPrevImg(e.target.value)}
                    ></input>
                    <p className='locaInputs'>Image 1</p>
                    <input
                        type="text"
                        placeholder="Image URL"
                        id='inputUpdate'
                        value={imgTwo}
                        onChange={(e) => setImgTwo(e.target.value)}
                    ></input>
                    <p className='locaInputs'>Image 2</p>
                    <input
                        type="text"
                        placeholder="Image URL"
                        id='inputUpdate'
                        value={imgThree}
                        onChange={(e) => setImgThree(e.target.value)}
                    ></input>
                    <p className='locaInputs'>Image 3</p>
                    <input
                        type="text"
                        placeholder="Image URL"
                        id='inputUpdate'
                        value={imgFour}
                        onChange={(e) => setImgFour(e.target.value)}
                    ></input>
                    <p className='locaInputs'>Image 4</p>
                    <input
                        type="text"
                        placeholder="Image URL"
                        id='inputUpdate'
                        value={imgFive}
                        onChange={(e) => setImgFive(e.target.value)}
                    ></input>
                </div>
                <div className='casButton'>
                    <button type='submit' className='uas' onClick={validateInputs}>
                        Update Spot
                    </button>
                </div>
            </form>
        </div>

    )
}

export default UpdateSpot
