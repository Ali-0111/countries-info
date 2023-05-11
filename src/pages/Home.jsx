import Cards from '../components/Cards';
import Navigation from '../components/Navigation';
import LastSearched from '../components/LastSearched';

function Home() {
  return (
    <main>
      <Navigation />
      <section className="home-data-container">
        <LastSearched />
        <Cards />
      </section>
    </main>
  );
}

export default Home;
