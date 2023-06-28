import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import countryPic from '../images/country.png';
import { countryByNameInformation } from '../api';

function Card({ name, capital }) {
  const dispatch = useDispatch();
  const linkClickHanlder = () => {
    dispatch(countryByNameInformation(name));
  };

  return (
    <NavLink
      className="link"
      to={`/details/${name}`}
      onClick={() => linkClickHanlder()}
    >
      <div className="countryPic-wrapper">
        <img className="countryPic" src={countryPic} alt="countryPic" />
      </div>
      <div className="country-capital">
        <h3>{name}</h3>
        <p>{capital}</p>
      </div>
    </NavLink>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};
export default Card;
