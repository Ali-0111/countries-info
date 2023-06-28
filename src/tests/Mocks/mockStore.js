import MockSlice from './mockSlice';

function MockStore() {
  return {
    reducer: MockSlice.initialState,
  };
}

export default MockStore;
