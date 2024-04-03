import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../api/service';

export const getData = createAsyncThunk('auth/getData', (_, thunkAPi) => {
  try {
    const response = http.get('/search/locations?name=Da nang');
    return response;
  } catch (error) {
    thunkAPi.rejectWithValue(error);
  }
});
