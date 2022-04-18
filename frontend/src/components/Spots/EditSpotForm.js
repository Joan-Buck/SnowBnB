import React, { useState } from "react";
import { editSpotThunk } from "../../store/spots";
import { useDispatch } from "react-redux";
import './NewSpotModal.css';

const EditSpotForm = ({ spot, closeModal }) => {
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
    const [latitude, setLatitude] = useState(spot.latitude);
    const [longitude, setLongitude] = useState(spot.longitude);
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
            imageURL,
            latitude,
            longitude
        };

        const result = await dispatch(editSpotThunk(editedSpot))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setValidationErrors(data.errors)

            });

        if (result) {
            closeModal()
        }
    }


    return (
        <div className="spot-form-container">
            <div className={'spot-form-title-container'}>
                <div className={'spot-form-title'}>Update your listing!</div>
            </div>
            <form className="spot-form"
                onSubmit={submitEditForm}>

                <label
                    htmlFor="name"
                    className="spot-form-label">Listing Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='spot-form-input'
                    >
                    </input>
                </label>
                <label
                    htmlFor="description"
                    className="spot-form-label">Description
                    <input
                        type="textarea"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='spot-form-input'
                    >
                    </input>
                </label>

                <label
                    htmlFor="address"
                    className="spot-form-label">Address
                    <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className='spot-form-input'
                    >
                    </input>
                </label>
                <label
                    htmlFor="city"
                    className="spot-form-label">City
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className='spot-form-input'
                    >
                    </input>
                </label>
                <label
                    htmlFor="state"
                    className="spot-form-label">State

                    <select name='state' onChange={(e) => setState(e.target.value)} className={'spot-form-select'}>
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
                    htmlFor="zipcode"
                    className="spot-form-label">Zipcode
                    <input
                        type="text"
                        name="zipcode"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                        className='spot-form-input'
                    >
                    </input>
                </label>
                <label
                    htmlFor="country"
                    className="spot-form-label">Country
                    <input
                        type="text"
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className='spot-form-input'
                    >
                    </input>
                </label>
                <label
                    htmlFor="price"
                    className="spot-form-label">Price Per Night
                    <input
                        type="number"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='spot-form-input'
                    >
                    </input>
                </label>
                <label
                    htmlFor="bedrooms"
                    className="spot-form-label">Number of Bedrooms
                    <input
                        type="number"
                        name="bedrooms"
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                        className='spot-form-input'
                    >
                    </input>
                </label>
                <label
                    htmlFor="number"
                    className="spot-form-label">Number of Bathrooms
                    <input
                        type="number"
                        name="bathrooms"
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                        className='spot-form-input'

                    >
                    </input>
                </label>
                <label
                    htmlFor="guests"
                    className="spot-form-label">Number of Guests
                    <input
                        type="number"
                        name="guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className='spot-form-input'

                    >
                    </input>
                </label>
                <label
                    htmlFor="imageURL"
                    className="spot-form-label">Image URL
                    <input
                        type="text"
                        name="imageURL"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        className='spot-form-input'
                    >
                    </input>
                </label>
                <label
                    htmlFor="latitude"
                    className="spot-form-label">Latitude
                    <input
                        type="decimal"
                        name="latitude"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        className='spot-form-input'
                    >
                    </input>
                </label>
                <label
                    htmlFor="longitude"
                    className="spot-form-label">Longitude
                    <input
                        type="decimal"
                        name="longitude"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        className='spot-form-input'
                    >
                    </input>
                </label>
                <button type="submit" className="spot-form-button">
                    Update My Listing!
                </button>
                <ul className="spot-form-errors">
                    {validationErrors.length > 0 && validationErrors.map((error, i) =>
                        <li key={i}>{error}</li>
                    )}
                </ul>
            </form>
        </div>
    )
}

export default EditSpotForm;
