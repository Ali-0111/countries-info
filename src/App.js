import { useDispatch } from 'react-redux';
import countryInformation from './api';

function App() {
  const dispatch = useDispatch();
  console.log(typeof (process.env.REACT_APP_API_KEY));
  const dataApi = dispatch(countryInformation('www.fac'));
  console.log(dataApi);
  return (
    <h2>coming soon.</h2>
  );
}

export default App;
