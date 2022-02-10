import React, { useState, useEffect } from "react";
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
    const [price, setPrice] = useState(0);
    const [bedrooms, setBedrooms] = useState(0);
    const [bathrooms, setBathrooms] = useState(0);
    const [guests, setGuests] = useState(0);
    const [imageURL, setImageURL] = useState('https://www.skimag.com/wp-content/uploads/2021/03/Liam_Doran-5549-s.jpg?width=2000');
    // const [redirect, setRedirect] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);



    // useEffect(() => {
    //     let errors = [];
    //     if (name.length < 1) errors.push("Please give your new listing a name.");
    //     if (name.length > 255) errors.push("Names must be no longer than 255 characters.");
    //     if (description.length < 1) errors.push("Please briefly describe your listing.");
    //     if (description.length > 255) errors.push("Descriptions must be no longer than 255 characters.");
    //     if (address.length < 1) errors.push("Please provide a street address for your listing.")
    //     if (address.length > 100) errors.push("Street addresses must be no longer than 100 characters.");
    //     if (state.length < 3) errors.push("Please provide the full state name.")
    //     if (state.length > 50) errors.push("State names must be no longer than 50 characters.");
    //     if (zipcode.length < 5) errors.push("Please provide a zipcode");
    //     if (zipcode.length > 15) errors.push("Zip Codes must be no longer than 15 characters.");
    //     if (country.length < 1) errors.push("Please provide the country where your listing is located");
    //     if (country.length > 50) errors.push("Countries must be no longer than 50 characters.");
    //     if (price < 1) errors.push("Please provide a price per night.");
    //     // no price restriction for upper limit, DB limits to decimal (6,2)
    //     if (bedrooms < 1) errors.push("Please provide the number of bedrooms for your listing.");
    //     if (bathrooms < 1) errors.push("Please provide the number of bathrooms for your listing.");
    //     if (guests < 1) errors.push("Please confirm the number of guests your listing can host.");
    //     if (imageURL.length < 1) errors.push("Please provide an image URL to display on your listing.");
    //     setValidationErrors(errors);

    // }, [name, description, address, state, zipcode, country, price, bedrooms, bathrooms, guests, imageURL])

    // console.log('errrors=========', validationErrors);


    const submitCreateForm = async (e) => {
        e.preventDefault();

        setValidationErrors([]);

        const payload = {
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

        const newSpot = await dispatch(createSpotThunk(payload))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setValidationErrors(data.errors)
                // console.log('errors >>>>>', data.errors)
                // return validationErrors
            }
            );

        if (newSpot) {
            hideForm();
        }
    }


    return (
        <div className="spot-form">
            <form className="new-spot-form"
                onSubmit={submitCreateForm}>
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
                    htmlFor="url">
                    <input
                        type="text"
                        name="url"
                        placeholder="Image URL"
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
