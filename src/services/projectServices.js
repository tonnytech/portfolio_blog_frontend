import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../sideCode/side";

export const postProject = createAsyncThunk(
  "blogs/postProject",
  async (projectData, thunkAPI) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${baseUrl}/api/v1/project`,
        data: projectData,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchProjects = createAsyncThunk(
  "blogs/fetchProjects",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/project`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const fetchProject = createAsyncThunk(
  "project/fetchProject",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/project/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const editProject = createAsyncThunk(
  "blogs/editProject",
  async (data, thunkAPI) => {
    const { id, projectsFormData } = data;

    try {
      const res = await axios({
        method: "PUT",
        url: `${baseUrl}/api/v1/project/${id}`,
        data: projectsFormData,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteProject = createAsyncThunk(
  "blogs/deleteProject",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${baseUrl}/api/v1/project/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
