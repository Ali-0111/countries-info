import React, { useEffect } from 'react';
import {
  Routes, Route, useNavigate, useLocation,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import countryInformation from './api';
import Home from './pages/Home';
import Details from './pages/Details';
import './styles/app.css';

function App() {
  const currentLocation = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // default view
  useEffect(() => {
    if (currentLocation.pathname !== '/') {
      navigate('/');
    }
    dispatch(countryInformation());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
