import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

type Login = {
  email: string;
  password: string;
};

type Register = {
  name: string;
  email: string;
  password: string;
};

const token = {
  set(token: any) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials: Register) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      // console.log(data);
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  },
);
const login = createAsyncThunk('auth/login', async (credentials: Login) => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    // console.log(data);
    return data;
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    // @ts-expect-error TS(2571): Object is of type 'unknown'.
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  },
);

const operations = {
  register,
  login,
  logout,
  fetchCurrentUser,
};

export default operations;
