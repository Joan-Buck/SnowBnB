import React, { useState } from "react";
import { editSpotThunk } from "../../store/spots";
import { useDispatch } from "react-redux";

const EditSpotForm = ({spot}) => {
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

        // if (result) {
        //     // hideForm();
        // }
    }


    return (
        <div className="spot-form">
            <form className="new-spot-form"
                onSubmit={submitEditForm}>
                <ul className="add-spot-form-errors">
                    {validationErrors.length > 0 && validationErrors.map((error) =>
                        <li key={error}>{error}</li>
                    )}
                </ul>

                <label
                    htmlFor="name">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name your listing..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="description">
                    <input
                        type="textarea"
                        name="description"
                        placeholder="Describe your listing..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}

                    >
                    </input>
                </label>

                <label
                    htmlFor="address">
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="city">
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="state">
                    <input
                        type="text"
                        name="state"
                        placeholder="State"
                        value={state}
                        onChange={(e) => setState(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="zipcode">
                    <input
                        type="text"
                        name="zipcode"
                        placeholder="Zip Code"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                    >
                    </input>
                </label>
                <label
                    htmlFor="country">
                    <input
                        type="text"
                        name="country"
                        placeholder="Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="price">
                    <input
                        type="number"
                        name="price"
                        placeholder="Price per night"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="bedrooms">
                    <input
                        type="number"
                        name="bedrooms"
                        placeholder="Number of Bedrooms"
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="number">
                    <input
                        type="number"
                        name="bathrooms"
                        placeholder="Number of Bathrooms"
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="guests">
                    <input
                        type="number"
                        name="guests"
                        placeholder="Number of Guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}

                    >
                    </input>
                </label>
                <label
                    htmlFor="imageURL">
                    <input
                        type="text"
                        name="imageURL"
                        placeholder="Image URL"
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
