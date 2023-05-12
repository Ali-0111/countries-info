import { Provider } from 'react-redux';
import camera from 'react-test-renderer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import store from '../../store/store';

describe('Validatin for Home page rendering', () => {
  test('Home page should be rendered succesfully', () => {
    const snapShot = camera.create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    ).toJSON();

    // Assert
    expect(snapShot).toMatchSnapshot();
  });
});
