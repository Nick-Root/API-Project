import { isValidElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewSpot } from "../../store/spots"


function CreateASpot() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.session.user)
    const nav = useNavigate()
    const [country, setCountry] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [lat, setLat] = useState(0)
    const [lng, setLng] = useState(0)
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [prevImg, setPrevImg] = useState("")
    const [imgTwo, setImgTwo] = useState("")
    const [imgThree, setImgThree] = useState("")
    const [imgFour, setImgFour] = useState("")
    const [imgFive, setImgFive] = useState("")
    const [errors, setErrors] = useState([])
    const allowedExtentions = [".jpg", ".jpeg", ".png"]

    const imgs = []
    if (prevImg) imgs.push(prevImg)
    if (imgTwo) imgs.push(imgTwo)
    if (imgThree) imgs.push(imgThree)
    if (imgFour) imgs.push(imgFour)
    if (imgFive) imgs.push(imgFive)

    function validateInputs() {
        if (!country) errors.push("Country is required")
        if (!address) errors.push("Address is required")
        if (!city) errors.push("City is required")
        if (!state) errors.push("State is required")
        if (!lat) errors.push("Latitude is required")
        if (!lng) errors.push("Longitude is required")
        if (!description) errors.push("Description is required")
        if (!name) errors.push("Title is required")
        if (!price) errors.push("Price is required")
        if (!prevImg) errors.push("Preview is required")
        for (let i = 0; i < imgs.length; i++) {
            const lowerImg = imgs[i].toLowerCase()
            let validExt = false
            for (let j = 0; j < allowedExtentions.length; j++) {
                const ext = allowedExtentions[j]
                if (lowerImg.endsWith(ext)) {
                    validExt = true;
                    break
                }
            }
            if (!validExt) errors.push("Image must have a valid extention")
        }
    }



}
