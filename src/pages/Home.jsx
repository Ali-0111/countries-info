import Cards from '../components/Cards';
import Navigation from '../components/Navigation';
import LastSearched from '../components/LastSearched';
import '../styles/pages/Home.css';

function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section className="font home-section">
          <LastSearched />
          <Cards />
        </section>
      </main>
    </>
  );
}

export default Home;
