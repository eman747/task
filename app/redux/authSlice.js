import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {removeData, saveDataToStorage} from '../services/storage/storage';

const initialState = {
  token: null,
};

export const fetchContent = createAsyncThunk(
  'auth/fetchContent',
  async action => {
    const res = await axios.post('https://dummyjson.com/auth/login', {
      username: action.username,
      password: action.password,
    });
    const data = await res.data;
    return data;
  },
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload;
    },
    logout: () => {
      removeData();
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      saveDataToStorage(action.payload.token);
      state.token = action.payload.token;
    });
  },
});

// Action creators are generated for each case reducer function
export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
