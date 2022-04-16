import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addDays } from 'date-fns';
import './SearchBar.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import dayjs from "dayjs";
import { getSpotsThunk } from '../../store/spots';
import { useDispatch, useSelector } from 'react-redux';
import { getBookingsThunk } from '../../store/bookings';
import { getSearchResultsThunk } from '../../store/search';

const SearchBar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [showPicker, setShowPicker] = useState(false);
    const [location, setLocation] = useState('');
    const [guests, setGuests] = useState(1);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    const spotsObj = useSelector(state => state.spots.spots);
    const spots = Object.values(spotsObj);
    const bookingsObj = useSelector(state => state.bookings.bookings);
    const bookings = Object.values(bookingsObj)


    useEffect(() => {
        dispatch(getSpotsThunk());
        dispatch(getBookingsThunk())
    }, [dispatch])

    useEffect(() => {
        if (!(state[0].startDate.toISOString().slice(0, 10) === state[0].endDate.toISOString().slice(0, 10))) {
            setShowPicker(false)
        }
    }, [state]);

    const handleSearch = (e) => {
        // e.preventDefault();
        // let searchResults;


            history.push(`/search/${location}/${state[0].startDate.toISOString().slice(0, 10)}/${state[0].endDate.toISOString().slice(0, 10)}/${guests}`)


    }

    return (
        <div className={'search-bar-container'}>
            <div className={'search-bar-form'}>
                {/* <label
                    htmlFor="city">
                    Location */}
                <div className='search-guests-text'>

                    <input
                        type="text"
                        placeholder='Where do you want to go?'
                        onChange={(e) => setLocation(e.target.value.toLowerCase())}
                        value={location}
                    >
                    </input>
                </div>
                {/* </label> */}
                <div id="search_check_parent">
                    <div id="search_start_date" onClick={() => setShowPicker(!showPicker)}>
                        <div id="check_in">Select Dates</div>
                        <div>{state[0].startDate && state[0].endDate ? <> {`${dayjs(state[0].startDate).format("MMM DD")} - ${dayjs(state[0].endDate).format("MMM DD")}`} </> : 'Add dates'}</div>
                    </div>
                    {showPicker &&
                        <div id="date_range_pop_up">
                            <DateRangePicker
                                onChange={item => setState([item.selection])}
                                showSelectionPreview={true}
                                moveRangeOnFirstSelection={false}
                                months={2}
                                ranges={state}
                                direction="horizontal"
                            />
                        </div>
                    }
                </div>

                {/* <label
                    htmlFor="guests">
                    Guest */}
                <div className='search-guests-text'>

                    <input
                        type="integer"
                        name="guests"
                        placeholder='Guests'
                        onChange={(e) => setGuests(e.target.value)}
                        value={guests}
                    >
                    </input>
                </div>
                {/* </label> */}
                <button type='submit' onClick={handleSearch}>Search</button>
            </div>

        </div>

    )
}

export default SearchBar;
