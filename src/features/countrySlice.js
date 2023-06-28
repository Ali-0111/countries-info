import { createSlice } from '@reduxjs/toolkit';
import countryInformation, { countryByNameInformation } from '../api';

const initialState = {
  countriesReport: [],
  countryByNameReport: [],
  isSearching: false,
};

const countrySlice = createSlice({
  name: 'countriesList',
  initialState,
  reducers: {
    removeChosenCountry: (state) => (
      ({
        ...state,
        countryByNameReport: [],
      })
    ),
  },
  extraReducers: (builder) => {
    builder.addCase(countryInformation.pending, (state) => (
      {
        ...state,
        isSearching: true,
      }
    ));

    builder.addCase(countryInformation.fulfilled, (state, { payload }) => (
      {
        ...state,
        countriesReport: payload,
        isSearching: false,
      }
    ));

    builder.addCase(countryByNameInformation.pending, (state) => (
      {
        ...state,
        isSearching: true,
      }
    ));

    builder.addCase(countryByNameInformation.fulfilled, (state, { payload }) => (
      {
        ...state,
        countryByNameReport: payload,
        isSearching: false,
      }
    ));
  },
});

export const { removeChosenCountry } = countrySlice.actions;
export default countrySlice;
