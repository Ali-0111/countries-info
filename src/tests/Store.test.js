import MockApi from './Mocks/mockApi';
import MockSlice from './Mocks/mockSlice';
import MockStore from './Mocks/mockStore';

describe('Validation for store updats', () => {
  test('Store should get Mockapi data', () => {
    // Arrange
    // when data is fetched, it will update the initial state
    MockSlice.initialState.countriesDetails = MockApi();
    // now, store which is connected to MockSlice, should be updated

    const store = MockStore().reducer.countriesDetails;

    // Assert
    // we expect dataStored should be equal MockApi() returned value
    expect(store).toEqual(MockApi());
  });
});
