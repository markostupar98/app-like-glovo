import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,  // Initialize user id as null
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;  // Payload should contain the user id
    },
    clearUser: (state) => {
      state.id = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
