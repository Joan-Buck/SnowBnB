import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import LoginFormPage from "./components/LoginFormPage";
import SignUpFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import {Switch, Route} from 'react-router-dom';
import * as sessionActions from './store/session';

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
          <Route path='/login'>
            <LoginFormPage />
          </Route>
          <Route path='/signup'>
            <SignUpFormPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
