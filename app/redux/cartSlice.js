import {createSlice} from '@reduxjs/toolkit';
import CartItem from '../models/cart-item';

const initialState = {
  items: {},
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addedProduct = action.payload;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      const prodImage = addedProduct.images;
      const productId = addedProduct.id;

      if (state.items[productId]) {
        const updatedCartItem = new CartItem(
          state.items[productId].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[productId].sum + prodPrice,
          prodImage,
          productId,
        );
        state.items = {...state.items, [productId]: updatedCartItem};
        state.totalAmount = state.totalAmount + prodPrice;
      } else {
        const newCartItem = new CartItem(
          1,
          prodPrice,
          prodTitle,
          prodPrice,
          prodImage,
          productId,
        );
        state.items = {...state.items, [productId]: newCartItem};
        state.totalAmount = state.totalAmount + prodPrice;
      }
    },
    removeFromCart: (state, action) => {
      const selectedCartItem = state.items[action.payload];
      const price = selectedCartItem.sum;
      let updatedCartItems;
      updatedCartItems = {...state.items};
      delete updatedCartItems[action.payload];
      state.items = updatedCartItems;
      state.totalAmount = state.totalAmount - price;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
