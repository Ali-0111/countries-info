import { useSelector } from 'react-redux';
import '../styles/components/Navigation.css';

function LastSearched() {
  const { countryByNameReport } = useSelector((state) => state);

  return (
    <div className="last-visited">
      {
        countryByNameReport[0]
          ? (
            <>
              <p>Recent</p>
              <h3>
                {countryByNameReport[0].name}
              </h3>
              <p>
                {countryByNameReport[0].capital}
              </p>
            </>
          )
          : (<p>Search your favorite country</p>)
      }
    </div>
  );
}

export default LastSearched;
