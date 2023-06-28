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
    <ul className="cards">
      {
        store.map((country, i) => (
          <li
            key={`country${i + 1}`}
            id={`country${i + 1}`}
            className="card-country border-blur"
          >
            <Card name={country.name} capital={country.capital} />
          </li>
        ))
      }
    </ul>
  );
}

export default Cards;
