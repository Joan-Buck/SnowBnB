import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import SignUpFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import {Switch, Route} from 'react-router-dom';
import * as sessionActions from './store/session';
import SpotCard from './components/Spots/SpotCard';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.retainUserSessionThunk()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded}/>
      {isLoaded && (
        <Switch >
          <Route exact path={'/'}>
            <HomePage />
          </Route>
          <Route path='/signup'>
            <SignUpFormPage />
          </Route>
          <Route path={'/spots'}>
            <SpotCard />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
