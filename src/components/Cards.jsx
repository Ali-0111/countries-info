import { useSelector } from 'react-redux';
import Card from './CardCountry';
import Loading from './Loading';
import '../styles/components/Cards.css';

function Cards() {
  const { countriesReport: store, isSearching } = useSelector((state) => state);

  if (isSearching) {
    return (
      <Loading />
    );
  }

  return (
    <div className="cards">
      {
        store.map((country, i) => (
          <div
            key={`country${i + 1}`}
            className="card-country border-blur"
          >
            <Card name={country.name} capital={country.capital} />
          </div>
        ))
      }
    </div>
  );
}

export default Cards;
