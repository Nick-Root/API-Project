import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { spotDetailsFetch } from "../../store/spots";
import { useParams } from "react-router-dom";


function SpotInfo() {
    const dispatch = useDispatch()
    const { spotId } = useParams()
    const spot = useSelector((state) => state.spots.currSpot)
    console.log(spot)

    useEffect(() => {
        dispatch(spotDetailsFetch(spotId))
    }, [dispatch, spotId])

    const alert = () => {
        alert("Feature Coming Soon")
    }

    let reviewsLabel;
    if (spot.numRevs === 1) reviewsLabel = 'Review'
    if (spot.numRevs > 1) reviewsLabel = 'Reviews'
    if (spot.numRevs === 0) reviewsLabel = 'New'

    return (
        <div id='spotInfoDisplay'>
            <h1 className='spotName'>{spot.name}</h1>
            <div className='location'>{spot.city}, {spot.state}, {spot.country}</div>
            <div className='imgs'>
                <div className='mainImg'> <img src={spot.SpotImages[0].url} className='prevImg' /> </div>
                <div className='otherImgs'>
                    <img src={spot.SpotImages[1].url} className='additionalImg' />
                    <img src={spot.SpotImages[2].url} className='additionalImg' />
                    <img src={spot.SpotImages[3].url} className='additionalImg' />
                    <img src={spot.SpotImages[4].url} className='additionalImg' />
                </div>
            </div>
            <div className='descRes'>
                <div className='details'>
                    <h2 className='ownerName'>Hosted by {spot.owner.firstName} {spot.owner.lastName}</h2>
                    <p className='description'>{spot.description}</p>
                </div>
                <div className='reserve'>
                    <div className='notButton'>
                        <div className='priceRevs'> ${spot.price} night </div>
                        < i className='fa-solid fa-star'></i>{spot.avgRating ? <p>{parseFloat(`${spot.avgRating}`).toFixed(1)}</p> : <p>New</p>}
                        <div className='numRevs'>{spot.numRevs} {reviewsLabel}</div>
                    </div>
                    <button className="resButton" onClick={alert}>Reserve</button>
                </div>
            </div>
        </div>
    )
}


export default SpotInfo
