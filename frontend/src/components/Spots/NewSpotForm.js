import React, { useState } from "react";
import { createSpotThunk } from "../../store/spots";
import { useDispatch } from "react-redux";

const NewSpotForm = ({ hideForm }) => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [country, setCountry] = useState('');
    const [price, setPrice] = useState(1);
    const [bedrooms, setBedrooms] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);
    const [guests, setGuests] = useState(0);
    const [imageURL, setImageURL] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);


    const submitCreateForm = async (e) => {
        e.preventDefault();

        setValidationErrors([]);

        const newSpot = {
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

        const result = await dispatch(createSpotThunk(newSpot))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setValidationErrors(data.errors)
            });

        if (result) {
            hideForm();
        }
    }


    return (
        <div className="spot-form">
            <form className="new-spot-form"
                onSubmit={submitCreateForm}>
                <div className="form-errors">
                    <ul className="errors-list">
                        {validationErrors.length > 0 && validationErrors.map((error, i) =>
                            <li key={i}>{error}</li>
                        )}
                    </ul>
                </div>
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
                    Add to My Listings!
                </button>
            </form>
        </div>
    )
}

export default NewSpotForm;
