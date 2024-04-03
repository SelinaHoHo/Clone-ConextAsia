import { createSlice } from '@reduxjs/toolkit';
import { getData } from './authThunk';

const initialState = {
  loading: false,
  error: [],
  data: [],
  details: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
