import PropTypes from 'prop-types';
import countryPic from '../images/country.png';

function Card({ name, capital }) {
  return (
    <>
      <div className="countryPic-wrapper">
        <img src={countryPic} alt="countryPic" />
      </div>
      <div className="country-capital">
        <h3>{name}</h3>
        <p>{capital}</p>
      </div>
    </>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
};
export default Card;
