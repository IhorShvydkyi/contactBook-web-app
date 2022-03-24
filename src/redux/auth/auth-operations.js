import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});
const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const operations = {
  register,
  login,
};

export default operations;
