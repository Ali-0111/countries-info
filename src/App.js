import React, { useEffect } from 'react';
import {
  Routes, Route, useNavigate, useLocation,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import countryInformation from './api';
import Home from './pages/Home';
import Details from './pages/Details';
import StateShower from './components/stateShower';
import './styles/app.css';

function App() {
  const currentLocation = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  StateShower();
  // default view
  useEffect(() => {
    if (currentLocation.pathname !== '/') {
      navigate('/');
    }
    dispatch(countryInformation());
  }, []);

  return (
    <>
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
