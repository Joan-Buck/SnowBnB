import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SignUpFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import { Switch, Route } from 'react-router-dom';
import * as sessionActions from './store/session';
import SpotListing from './components/Spots/SpotListing';
import MyListing from './components/Spots/MySpots';
import SingleSpot from './components/Spots/SingleSpot';
import MyBookings from './components/Bookings/MyBookings';
import { getResortsThunk } from './store/spots';
import SearchResult from './components/Search/SearchResults';
import ErrorPage from './components/Error/ErrorPage';
import LoginRequired from './components/LoginRequired/LoginRequired';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(getResortsThunk())
  }, [dispatch]);

  useEffect(() => {
    dispatch(sessionActions.retainUserSessionThunk()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch >
          <Route exact path={'/'}>
            <HomePage />
          </Route>
          <Route path='/signup'>
            <SignUpFormPage />
          </Route>
          <Route path='/login-required' exact={true}>
          <LoginRequired />
        </Route>
          <Route exact path={'/spots'}>
            <SpotListing />
          </Route>
          <Route path={'/spots/:spotId'}>
            <SingleSpot />
          </Route>
          <Route path={'/my-listings'}>
            <MyListing />
          </Route>
          <Route path={'/my-bookings'}>
            <MyBookings />
          </Route>
          <Route path={'/search/:location/:startDate/:endDate/:guests'}>
            <SearchResult />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
