import { configureStore } from '@reduxjs/toolkit';
import countrySlice from '../features/countrySlice';

const store = configureStore(
  {
    reducer: countrySlice.reducer,
  },
);
export default store;
