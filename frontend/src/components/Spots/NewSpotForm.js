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
                       <select name='state' onChange={(e) => setState(e.target.value)} className={'food-truck-form-select'}>
                        <option value=''>
                            Select your state...
                        </option>
                        <option value='Alabama'>
                            Alabama
                        </option>
                        <option value='Alaska'>
                            Alaska
                        </option>
                        <option value='Arizona'>
                            Arizona
                        </option>
                        <option value='Arkansas'>
                            Arkansas
                        </option>
                        <option value='California'>
                            California
                        </option>
                        <option value='Colorado'>
                            Colorado
                        </option>
                        <option value='Connecticut'>
                            Connecticut
                        </option>
                        <option value='Delaware'>
                            Delaware
                        </option>
                        <option value='Florida'>
                            Florida
                        </option>
                        <option value='Georgia'>
                            Georgia
                        </option>
                        <option value='Hawaii'>
                            Hawaii
                        </option>
                        <option value='Idaho'>
                            Idaho
                        </option>
                        <option value='Illinois'>
                            Illinois
                        </option>
                        <option value='Indiana'>
                            Indiana
                        </option>
                        <option value='Iowa'>
                            Iowa
                        </option>
                        <option value='Kansas'>
                            Kansas
                        </option>
                        <option value='Kentucky'>
                            Kentucky
                        </option>
                        <option value='Louisiana'>
                            Louisiana
                        </option>
                        <option value='Maine'>
                            Maine
                        </option>
                        <option value='Maryland'>
                            Maryland
                        </option>
                        <option value='Massachusetts'>
                            Massachusetts
                        </option>
                        <option value='Michigan'>
                            Michigan
                        </option>
                        <option value='Minnesota'>
                            Minnesota
                        </option>
                        <option value='Mississippi'>
                            Mississippi
                        </option>
                        <option value='Missouri'>
                            Missouri
                        </option>
                        <option value='Montana'>
                            Montana
                        </option>
                        <option value='Nebraska'>
                            Nebraska
                        </option>
                        <option value='Nevada'>
                            Nevada
                        </option>
                        <option value='New Hampshire'>
                            New Hampshire
                        </option>
                        <option value='New Jersey'>
                            New Jersey
                        </option>
                        <option value='New Mexico'>
                            New Mexico
                        </option>
                        <option value='New York'>
                            New York
                        </option>
                        <option value='North Carolina'>
                            North Carolina
                        </option>
                        <option value='North Dakota'>
                            North Dakota
                        </option>
                        <option value='Ohio'>
                            Ohio
                        </option>
                        <option value='Oklahoma'>
                            Oklahoma
                        </option>
                        <option value='Oregon'>
                            Oregon
                        </option>
                        <option value='Pennsylvania'>
                            Pennsylvania
                        </option>
                        <option value='Rhode Island'>
                            Rhode Island
                        </option>
                        <option value='South Carolina'>
                            South Carolina
                        </option>
                        <option value='South Dakota'>
                            South Dakota
                        </option>
                        <option value='Tennessee'>
                            Tennessee
                        </option>
                        <option value='Texas'>
                            Texas
                        </option>
                        <option value='Utah'>
                            Utah
                        </option>
                        <option value='Vermont'>
                            Vermont
                        </option>
                        <option value='Virginia'>
                            Virginia
                        </option>
                        <option value='Washington'>
                            Washington
                        </option>
                        <option value='West Virginia'>
                            West Virginia
                        </option>
                        <option value='Wisconsin'>
                            Wisconsin
                        </option>
                        <option value='Wyoming'>
                            Wyoming
                        </option>
                    </select>
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
