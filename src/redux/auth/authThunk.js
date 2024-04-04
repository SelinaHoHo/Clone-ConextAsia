import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../api/service";
import { notification } from "antd";

export const getData = createAsyncThunk("auth/getData", (_, thunkAPi) => {
  try {
    const response = http.get("/search/locations?name=Da nang");
    return response;
  } catch (error) {
    thunkAPi.rejectWithValue(error);
  }
});

export const getDetails = createAsyncThunk(
  "auth/getDetails",
  (data, thunkAPi) => {
    const { name } = data;
    try {
      const response = http.get(
        `/search/locations?name=&workplace_name=${name}`
      );
      return response;
    } catch (error) {
      thunkAPi.rejectWithValue(error);
    }
  }
);
export const login = createAsyncThunk("auth/login", async (data, thunkApi) => {
  try {
    const repsonse = await http.post("/login", data);
    if (repsonse.status === 200) {
      notification.success({
        // Show success notification
        message: "Login Successful",
        description: "You have successfully logged in.",
      });
    }
  } catch (error) {
    notification.error({
      // Show error notification
      message: "Login Failed",
      description:
        error.response.data.message || "An error occurred during login.",
    });
    return thunkApi.rejectWithValue(error.response.status);
  }
});

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkApi) => {
    try {
      const repsonse = await http.post("/register", data);
      if (repsonse.status === 201) {
        notification.success({
          // Show success notification
          message: "Registration Successful",
          description: "You have successfully registered.",
        });
      }
      return repsonse;
    } catch (error) {
      notification.error({
        // Show error notification
        message: "Registration Failed",
        description:
          error.response.data.message ||
          "An error occurred during registration.",
      });
      return thunkApi.rejectWithValue(error);
    }
  }
);
