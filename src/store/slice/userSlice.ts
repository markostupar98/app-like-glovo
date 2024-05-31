import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    token: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    clearUser: (state) => {
      state.id = null;
      state.token = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;