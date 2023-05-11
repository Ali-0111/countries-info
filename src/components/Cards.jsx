import { useSelector } from 'react-redux';

function Cards() {
  const { countriesReport: store, isSearching } = useSelector((state) => state);

  if (isSearching) {
    return (<p>Downloading...</p>);
  }

  return (
    <div className="cards">
      {
        store.map((country, i) => (
          <div key={`country${i + 1}`} className="card-country">
            <h3>{country.name}</h3>
            <p>{country.capital}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Cards;
