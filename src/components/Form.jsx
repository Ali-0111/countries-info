import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import FilterBySearch from './filterbySearch';
import { countryByNameInformation } from '../api';

function Form() {
  const { countriesReport } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [country, setcountry] = React.useState('');
  const [filteredArray, setfilteredArray] = React.useState([]);

  const linkClickHanlder = (country) => {
    dispatch(countryByNameInformation(country));
  };

  function changeHandler(event) {
    setcountry(event.target.value);
    setfilteredArray(FilterBySearch(countriesReport, event.target.value));
  }

  function submitHandler(e) {
    e.preventDefault();
    dispatch(countryByNameInformation(country));
    navigate(`/details/${country}`);
  }

  return (
    <div className="form-wrapper">
      <form className="search-Form flex-row" onSubmit={submitHandler}>
        <input
          className="input-search-country"
          type="text"
          value={country}
          placeholder="Search by country name"
          required
          onChange={changeHandler}
        />
        <button
          className="submit-btn"
          type="submit"
        >
          <i className="search-icon" />
        </button>
      </form>
      {
        country && (
          <div className="filteredList">
            <ul>
              {!filteredArray[0] && (
                <p>Not matched. Search to download...</p>
              )}
              {
                filteredArray.map((item, i) => (
                  <li key={`filtered${i + 1}`}>
                    <Link
                      className="searchLink"
                      to={`/details/${item.name}`}
                      onClick={() => linkClickHanlder(item.name)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }

    </div>
  );
}

export default Form;
