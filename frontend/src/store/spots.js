import { csrfFetch } from "./csrf";

const GET_ALL_SPOTS = "spots/getAllSpots";
const GET_SPOT_DETAILS = "spots/getSpotDetails";


const getAllSpots = (payload) => {
    return {
        type: GET_ALL_SPOTS,
        payload
    }
}

const getSpotDetails = (payload) => {
    return {
        type: GET_SPOT_DETAILS,
        payload
    }
}


export const getAllSpotsFetch = () => async (dispatch) => {
    const res = await csrfFetch("/api/spots", {
        method: "GET"
    })
    const allSpots = await res.json()
    dispatch(getAllSpots(allSpots))
    return allSpots
}

export const spotDetailsFetch = (spotId) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spotId}`, {
        method: "GET"
    })
    const spotDetails = await res.json()
    dispatch(getSpotDetails(spotDetails))
    return spotDetails
}


const initialState = {
    allSpots: {},
    currSpot: {}
}

export const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SPOTS:
            return { ...state, allSpots: action.payload }
        case GET_SPOT_DETAILS:
            return { ...state, currSpot: action.payload }
        default:
            return state
    }
}

export default spotsReducer
