import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
};

const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = appSlice.actions;

export const selectTheme = state => state.appState.theme;

export default appSlice.reducer;
