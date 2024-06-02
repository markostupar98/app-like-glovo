import { createSlice } from '@reduxjs/toolkit';

export const driverSlice = createSlice({
  name: 'driver',
  initialState: {
    id: null,
    token: null,
  },
  reducers: {
    setDriver: (state, action) => {
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    clearDriver: (state) => {
      state.id = null;
      state.token = null;
    },
  },
});

export const { setDriver, clearDriver } = driverSlice.actions;

export default driverSlice.reducer;
