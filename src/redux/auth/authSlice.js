import { createSlice } from "@reduxjs/toolkit";
import { getData, getDetails } from "./authThunk";

const initialState = {
  userSignedIn: "",
  isLogin: false,
  loading: false,
  error: [],
  data: [],
  details: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.userSignedIn = "";
      state.isLogin = false;
    },
    login: (state, action) => {
      state.isLogin = true;
    },
  },
  extraReducers: (builder) => {
    //Get data Homepage
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
    //Get detail Detailpage
    builder.addCase(getDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.details = action.payload[0].Workplaces[0];
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.loading = true;
    });
  },
});

export const { logout, login } = authSlice.actions;
export default authSlice.reducer;
