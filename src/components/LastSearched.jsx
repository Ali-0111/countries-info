import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import worldMap from '../images/world.png';

function LastSearched() {
  const navigate = useNavigate();

  function detailsNavigatorHandler() {
    navigate('/details');
  }

  const { countryByNameReport } = useSelector((state) => state);

  return (
    <div className="last-visited-con flex-row">
      <div className="bg-map-wrapper">
        <div className="worldPic-shadow">
          <img className="worldPic" src={worldMap} alt="world-map" />
        </div>
      </div>
      <div className="recent-searched border-blur">
        {
          countryByNameReport[0]
            ? (
              <>
                <h2>
                  {countryByNameReport[0].name}
                </h2>
                <p>
                  {countryByNameReport[0].capital}
                </p>
                <button
                  className="navigator"
                  type="button"
                  onClick={detailsNavigatorHandler}
                >
                  <i className="details-navigator-icon" />
                </button>
              </>
            )
            : (<h3 className="canSearch"> You can Search your favorite country.</h3>)
        }
      </div>
    </div>
  );
}

export default LastSearched;
