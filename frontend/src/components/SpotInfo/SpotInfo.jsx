import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { spotDetailsFetch } from "../../store/spots";
import { useParams } from "react-router-dom";
import './SpotInfo.css'

function SpotInfo() {
    const dispatch = useDispatch()
    const { spotId } = useParams()
    const spot = useSelector((state) => state.spots.currSpot)
    console.log(spot)

    // if (spot.id !== parseInt(spotId)) return null;
    useEffect(() => {
        dispatch(spotDetailsFetch(spotId))
    }, [dispatch, spotId])
    if (!spot) return null
    if (!spot.SpotImages) return null;
    if (spot.id !== parseInt(spotId)) return null;
    const alert = () => {
        alert("Feature Coming Soon")
    }




    let reviewsLabel;
    if (spot.numReviews === 1) reviewsLabel = 'Review'
    if (spot.numReviews > 1) reviewsLabel = 'Reviews'
    if (spot.numReviews === 0) reviewsLabel = 'New'

    return (
        <div id='spotInfoDisplay'>
            <h1 className='spotName'>{spot.name}</h1>
            <div className='loca'>{spot.city}, {spot.state}, {spot.country}</div>
            <div className='imgs'>
                <div className='mainImgSec'> <img src={spot.SpotImages[0].url} className='mainImg' /> </div>
                <div className='extras'>
                    <div className='otherImgs'>
                        {spot.SpotImages[1] && <img src={spot.SpotImages[1].url} id='additionalImg' className='extra1' />}
                        {spot.SpotImages[2] && <img src={spot.SpotImages[2].url} id='additionalImg' className='extra2' />}
                    </div>
                    <div className='otherImgs2'>
                        {spot.SpotImages[3] && <img src={spot.SpotImages[3].url} id='additionalImg' className='extra3' />}
                        {spot.SpotImages[4] && <img src={spot.SpotImages[4].url} id='additionalImg' className='extra4' />}
                    </div>
                </div>
            </div>
            <div className='descRes'>
                <div className='textAndButton'>

                    <div className='details'>
                        <h2 className='ownerName'>Hosted by {spot.Owner.firstName} {spot.Owner.lastName}</h2>
                        <p className='description'>{spot.description}</p>
                    </div>
                    <div className='reserve'>
                        <div className='notButton'>
                            <div className='resInfo'>
                                <div className='priceRevs'> ${spot.price} night </div>
                                <div className='reviewInfo'>
                                    < i className='fa-solid fa-star'></i>{typeof spot.avgRating === 'number' ? (<p>{parseFloat(spot.avgRating).toFixed(1)}</p>) : (<p>New</p>)}
                                    <div className='numRevs'>{spot.numReviews} {reviewsLabel}</div>
                                </div>
                            </div>
                        </div>
                        <button className="resButton" onClick={alert}>Reserve</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SpotInfo
