import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import '../styles/pages/Details.css';

function Details() {
  const navigate = useNavigate();

  function homeNavigatorHandler() {
    navigate('/');
  }

  const { countryByNameReport, isSearching } = useSelector((state) => state);

  if (isSearching) {
    return (<Loading />);
  }

  return (
    <section className="details-container font">
      <header className="main-head details-head">
        <button
          className="navigator"
          type="button"
          onClick={homeNavigatorHandler}
        >
          <i className="home-navigator-icon" />
        </button>
        <h2>{countryByNameReport[0].name}</h2>
      </header>

      <div className="searched-country-container">
        {
          !countryByNameReport[0]
            ? <p>Not Matched!</p>
            : (
              <ul className="list-country-details">
                <div className="list-head list-item">
                  <h3>Parameters:</h3>
                  <h3>(Values)</h3>
                </div>

                {
                  Object.entries(countryByNameReport[0]).map((item, i) => {
                    const [key, value] = item;
                    return (
                      <>
                        <li className="list-item" key={`key${i + 1}`}>
                          <h3>{key}</h3>
                          {
                            (key === 'currency')
                              ? <p>{value.name}</p>
                              : <p>{value}</p>
                          }
                        </li>
                      </>
                    );
                  })
                }
              </ul>
            )
        }
      </div>
    </section>
  );
}

export default Details;
