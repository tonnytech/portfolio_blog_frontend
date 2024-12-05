import { createSlice } from "@reduxjs/toolkit";
import { fetchProject } from "../../services/projectServices";

// Set the initial state
export const initialState = {
  project: {},
  projectIsLoading: false,
  projectError: null,
  projectIsSuccessful: false,
};

const getBlogSlice = createSlice({
  name: "eachProjectSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProject.pending, (state) => ({
        ...state,
        projectIsLoading: true,
        projectIsSuccessful: false,
      }))
      .addCase(fetchProject.fulfilled, (state, action) => {
        const returnData = {
          ...state,
          project: action.payload.project,
          projectIsLoading: false,
          projectIsSuccessful: true,
        };
        return returnData;
      })
      .addCase(fetchProject.rejected, (state, action) => ({
        ...state,
        projectError: action.payload,
        projectIsLoading: false,
        projectIsSuccessful: false,
      }));
  },
});

export default getBlogSlice.reducer;
