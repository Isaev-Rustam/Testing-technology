import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Api from '../../services/api';

interface IData {
  id: number;
  title: string;
  completed: boolean;
}
interface IInitialState {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
  data: IData[] | [];
}

const initialState = {
  loading: 'idle',
  error: null,
  data: [],
} as IInitialState;

export const getData = createAsyncThunk('data/getData', async () => {
  const response = await Api.getTodos<IData[]>();
  return response;
});

const getDataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state) => {
        state.error = 'error';
      });
  },
});

// export const globalSliceActions = getDataSlice.actions;
export default getDataSlice.reducer;
