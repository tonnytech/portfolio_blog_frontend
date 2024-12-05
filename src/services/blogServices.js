import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../sideCode/side";

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/article`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const fetchBlog = createAsyncThunk(
  "blogs/fetchBlog",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/article/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const deleteBlog = createAsyncThunk(
  "blogs/fetchBlog",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${baseUrl}/api/v1/article/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const postBlog = createAsyncThunk(
  "blogs/postBlog",
  async (blogData, thunkAPI) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${baseUrl}/api/v1/article`,
        data: blogData,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const editBlog = createAsyncThunk(
  "blogs/editBlog",
  async (data, thunkAPI) => {
    const { id, formData } = data;

    try {
      const res = await axios({
        method: "PUT",
        url: `${baseUrl}/api/v1/article/${id}`,
        data: formData,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const searchByTag = createAsyncThunk(
  "blogs/searchByTag",
  async (tag, thunkAPI) => {
    try {
      const res = await axios({
        method: "GET",
        url: `${baseUrl}/api/v1/article/tag/${tag}`,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const searchByEngine = createAsyncThunk(
  "blogs/searchByEngine",
  async (query, thunkAPI) => {
    try {
      const res = await axios({
        method: "GET",
        url: `${baseUrl}/api/v1/article/search/${query}`,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
