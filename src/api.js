import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_API_BASE_URL;
const configHeader = {
  headers: {
    'X-Api-Key': apiKey,
  },
  contentType: 'application/json',
};

const countryInformation = createAsyncThunk(
  'countryDetails', async (url = baseUrl) => {
    const response = await axios.get(url, configHeader);
    console.log(response);
    return response.data;
  },
);
export default countryInformation;
