import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = `${process.env.REACT_APP_API_BASE_URL}&&limit=20`;
const configHeader = {
  headers: {
    'X-Api-Key': apiKey,
  },
  contentType: 'application/json',
};

const countryInformation = createAsyncThunk(
  'countriesList/countryDetails', async (url = baseUrl) => {
    const response = await axios.get(url, configHeader);
    return response.data;
  },
);

export const countryByNameInformation = createAsyncThunk(
  'countriesList/countryByNameDetails', async (url) => {
    const response = await axios.get(url, configHeader);
    return response.data;
  },
);
export default countryInformation;
