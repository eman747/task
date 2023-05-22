import {Platform} from 'react-native';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  search: [],
};

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (action, thunk) => {
    const token = thunk.getState().auth.token;
    const res = await axios.get('https://dummyjson.com/products', {
      headers: {
        Authorization: token,
      },
    });
    const data = await res.data;
    return data;
  },
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    searchByTitle: (state, action) => {
      const products = action.payload.products;
      if (Platform.OS === 'ios') {
        let search = products.filter(array =>
          array.title.startsWith(action.payload.query),
        );
        state.search = search;
      } else {
        let search = products.filter(array =>
          array.title.toLowerCase().startsWith(action.payload.query),
        );
        state.search = search;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      let sortedArray = action.payload.products.sort(function (a, b) {
        return b.price - a.price;
      });
      state.products = sortedArray;
    });
  },
});

// Action creators are generated for each case reducer function
export const {searchByTitle} = productSlice.actions;

export default productSlice.reducer;
