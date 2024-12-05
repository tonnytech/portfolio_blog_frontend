import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../sideCode/side";

export const checkAdmin = createAsyncThunk(
  "users/checkAdmin",
  async (adminData, thunkAPI) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${baseUrl}/api/v1/user/admin`,
        data: adminData,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (adminData, thunkAPI) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${baseUrl}/api/v1/user/login`,
        data: adminData,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
