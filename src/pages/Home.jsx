import Cards from '../components/Cards';
import Navigation from '../components/Navigation';
import LastSearched from '../components/LastSearched';

function Home() {
  return (
    <>
      <Navigation />
      <section className="home-data-container">
        <LastSearched />
        <Cards />
      </section>
    </>
  );
}

export default Home;
