import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useModal } from "../../context/Modal"
import { createNewReview, fetchReviews } from "../../store/reviews"
import * as sessionActions from "../../store/reviews"
import './CreateReview.css'

function CreateReviewModal({ spot, user }) {
    const dispatch = useDispatch()
    const spotId = useSelector((state) => state.spots.currSpot.id)

    const [reviewText, setReviewText] = useState("")
    const [stars, setStars] = useState("")

    const { closeModal } = useModal()


    const setRating = (e) => {
        e.preventDefault()
        setStars(e.target.id)
    }



    const handleSubmit = async () => {
        // e.preventDefault()

        const newRev = {
            userId: user.id,
            spotId: spot.id,
            review: reviewText,
            stars
        }
        const res = await dispatch(createNewReview(newRev, spotId))
        await dispatch(sessionActions.fetchReviews(spotId))
        await dispatch(fetchReviews(spotId))

        closeModal()
        setReviewText("")
        setStars(0)

        return res
    }
    return (
        <div className='createRevModalCont'>
            <h1 className="stayHeader">How was your stay?</h1>
            <form onSubmit={handleSubmit} className='revModalForm'>
                <textarea
                    className="revTxt"
                    type='text'
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Leave your review here..."
                    required
                />
                <div className="starBox">
                    <i id="1" className={stars > 0 ? "fa-solid fa-star" : "fa-regular fa-star"} onClick={setRating}></i>
                    <i id="2" className={stars > 1 ? "fa-solid fa-star" : "fa-regular fa-star"} onClick={setRating}></i>
                    <i id="3" className={stars > 2 ? "fa-solid fa-star" : "fa-regular fa-star"} onClick={setRating}></i>
                    <i id="4" className={stars > 3 ? "fa-solid fa-star" : "fa-regular fa-star"} onClick={setRating}></i>
                    <i id="5" className={stars > 4 ? "fa-solid fa-star" : "fa-regular fa-star"} onClick={setRating}></i>
                    <p className="starLabel">Stars</p>
                </div>
                <button className="subRevButton" disabled={reviewText.length < 10 || stars < 1}>
                    Submit Your Review
                </button>
            </form>
        </div>
    )
}

export default CreateReviewModal
