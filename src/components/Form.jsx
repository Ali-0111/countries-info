import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { countryByNameInformation } from '../api';

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [country, setcountry] = React.useState('');

  const byCountryUrl = `
    ${process.env.REACT_APP_API_BASE_URL}${country}`;

  function changeHandler(event) {
    setcountry(event.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    dispatch(countryByNameInformation(byCountryUrl));
    navigate('/details');
  }

  return (
    <form className="search-Form" onSubmit={submitHandler}>
      <input
        className="input-search-country"
        type="text"
        value={country}
        placeholder="Search by country name"
        onChange={changeHandler}
      />
      <button
        className="submit-btn"
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default Form;
