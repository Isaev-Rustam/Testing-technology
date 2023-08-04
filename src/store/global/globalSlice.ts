import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  theme: boolean;
}

const initialState: IInitialState = {
  theme: false,
};
const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.theme = !state.theme;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const globalSliceActions = globalSlice.actions;
export default globalSlice.reducer;
