import { createSlice } from "@reduxjs/toolkit";
import { getData, getDetails } from "./authThunk";
import { login, register } from "./authThunk";

const initialState = {
  userSignedIn: "",
  islogin: false,
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
      state.islogin = false;
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
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.islogin = true;
      state.userSignedIn = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.islogin = true;
      state.userSignedIn = action.payload.email;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
