import React, { useEffect } from 'react';
import {
  Routes, Route, useNavigate, useLocation,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import countryInformation from './api';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Details from './pages/Details';

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
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
