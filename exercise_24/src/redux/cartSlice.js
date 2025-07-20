import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existing = state.find(p => p.id === action.payload.id);
      if (!existing) {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    updateCart: (state, action) => {
      const item = state.find(p => p.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter(p => p.id !== action.payload.id);
    },
  },
});

export const { addToCart, updateCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
