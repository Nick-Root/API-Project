import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpotsFetch } from "../../store/spots";
import { NavLink } from "react-router-dom";
import OpenModalButton from "../OpenModalButton/OpenModalButton";
import DeleteModal from "../DeleteSpotModal/DeleteSpotModal";
import './ManageSpots.css'


function ManageUserSpots() {
    const dispatch = useDispatch()
    const spots = useSelector((state) => state.spots.allSpots.Spots)
    const user = useSelector((state) => state.session.user)

    useEffect(() => {
        dispatch(getAllSpotsFetch())
    }, [dispatch])

    if (!spots) {
        dispatch(getAllSpotsFetch())
        return null
    }

    const usersSpots = spots.filter((spot) => spot.ownerId === user.id)

    const usersSpotsDisplay = usersSpots?.map((spot) => (
        <div key={spot?.id} className="spotContain">
            <NavLink to={`/spots/${spot.id}`}>
                <div className='imgContainer'>
                    <div className='toolTip' title={spot.name}>
                        <img src={spot.previewImage} className='prevImg' />
                    </div>
                </div>
                <div className='locaPrice'>
                    <p className='location'>{spot.city}, {spot.state}</p>
                    <p className='price'>${spot.price}.00 night</p>
                </div>
                <div className='reviewSection'>
                    <div className='reviews'>
                        < i className='fa-solid fa-star'></i>{typeof spot.avgRating === 'number' ? (<p>{parseFloat(spot.avgRating).toFixed(1)}</p>) : (<p>New</p>)}
                    </div>
                </div>
            </NavLink >
            <div className='updateDelete'>
                <button className='updateASpot'>
                    <NavLink to={`/spots/${spot.id}/edit`} className='updateNavLink'>Update</NavLink>
                </button>
                <div className='deleteButton'><OpenModalButton buttonText={"Delete"} modalComponent={<DeleteModal spot={spot} />} /></div>
            </div>
        </div >
    ))
    return (
        <div className='mainManageBox'>

            <div className='headerCreate'>
                <h1 className="manageHeader">Manage Spots</h1>
            <NavLink to='/spots/new' className='newSpotManage'>Create A Spot</NavLink>
            </div>
        <div className='returnPage'>
            <div className='manage'>{usersSpotsDisplay}</div>
        </div>
        </div>
    )
}

export default ManageUserSpots
