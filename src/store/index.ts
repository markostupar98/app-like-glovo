import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/slice/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
