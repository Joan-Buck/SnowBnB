import React, { useState } from "react";
import { editSpotThunk } from "../../store/spots";
import { useDispatch } from "react-redux";

const EditSpotForm = ({spot, hideForm}) => {
    const { id } = spot
    const dispatch = useDispatch();
    const [name, setName] = useState(spot.name);
    const [description, setDescription] = useState(spot.description);
    const [address, setAddress] = useState(spot.address);
    const [city, setCity] = useState(spot.city);
    const [state, setState] = useState(spot.state);
    const [zipcode, setZipcode] = useState(spot.zipcode);
    const [country, setCountry] = useState(spot.country);
    const [price, setPrice] = useState(spot.price);
    const [bedrooms, setBedrooms] = useState(spot.bedrooms);
    const [bathrooms, setBathrooms] = useState(spot.bathrooms);
    const [guests, setGuests] = useState(spot.guests);
    const [imageURL, setImageURL] = useState(spot.SpotImages[0]?.url ?? '');
    const [validationErrors, setValidationErrors] = useState([]);


    const submitEditForm = async (e) => {
        e.preventDefault();

        setValidationErrors([]);

        const editedSpot = {
            id,
            name,
            description,
            address,
            city,
            state,
            zipcode,
            country,
            price,
            bedrooms,
            bathrooms,
            guests,
            imageURL
        };

        const result = await dispatch(editSpotThunk(editedSpot))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setValidationErrors(data.errors)

        }
        );

        if (result) {
            hideForm();
        }
    }


    return (
        <div className="spot-form">
            <form className="new-spot-form"
                onSubmit={submitEditForm}>
                <ul className="form-errors">
                    {validationErrors.length > 0 && validationErrors.map((error, i) =>
                        <li key={i}>{error}</li>
                    )}
                </ul>

                <label
                    htmlFor="name">Listing Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="description">Description
                    <input
                        type="textarea"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}

                    >
                    </input>
                </label>

                <label
                    htmlFor="address">Address
                    <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="city">City
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="state">State
                    <input
                        type="text"
                        name="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="zipcode">Zipcode
                    <input
                        type="text"
                        name="zipcode"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                    >
                    </input>
                </label>
                <label
                    htmlFor="country">Country
                    <input
                        type="text"
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="price">Price Per Night
                    <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="bedrooms">Number of Bedrooms
                    <input
                        type="number"
                        name="bedrooms"
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="number">Number of Bathrooms
                    <input
                        type="number"
                        name="bathrooms"
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="guests">Number of Guests
                    <input
                        type="number"
                        name="guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="imageURL">Image URL
                    <input
                        type="text"
                        name="imageURL"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                    >
                    </input>
                </label>
                <button type="submit" >
                    Update My Listing!
                </button>
            </form>
        </div>
    )
}

export default EditSpotForm;
