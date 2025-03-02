import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logIn, logOut } from './features/authSlice';
import authService from './services/auth';

function App() {
  const [loader, setLoader] = useState(true);
  const dispath = useDispatch();
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(logIn({ userData }));
        } else {
          dispatch(logOut());
        }
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);
  
  return !loader ? (
    <></>
  ):(
    <></>
  );
}

export default App;