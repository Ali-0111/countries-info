import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Details() {
  const navigate = useNavigate();

  function homeNavigatorHandler() {
    navigate('/');
  }

  const { countryByNameReport, isSearching } = useSelector((state) => state);

  if (isSearching) {
    return (<p>Searching...</p>);
  }

  return (
    <section className="details-container">
      <div className="searched-country-container">
        <button
          className="home-navigator"
          type="button"
          onClick={homeNavigatorHandler}
        >
          Home
        </button>
        {
          !countryByNameReport[0]
            ? <p>Not Matched!</p>
            : (
              <>
                <h3>
                  Country-Name:
                  {countryByNameReport[0].name}
                </h3>
                <p>
                  Capital-Name:
                  {countryByNameReport[0].capital}
                </p>
                <p>
                  Capital-Region:
                  {countryByNameReport[0].region}
                </p>
                <p>
                  Currency:
                  {countryByNameReport[0].currency.name}
                </p>
              </>
            )
        }
      </div>
    </section>
  );
}

export default Details;
