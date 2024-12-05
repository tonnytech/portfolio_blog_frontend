import { createSlice } from "@reduxjs/toolkit";
import { fetchProjects } from "../../services/projectServices";

// Set the initial state
export const initialState = {
  projects: [],
  technologies: [],
  projectsIsLoading: false,
  projectsError: null,
  projectsIsSuccessfull: false,
};

const projectsSlice = createSlice({
  name: "ProjectsSlice",
  initialState,
  reducers: {
    setProjectsInSlice: (state, action) => {
      state.projects = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => ({
        ...state,
        projectsIsLoading: true,
      }))
      .addCase(fetchProjects.fulfilled, (state, action) => {
        const returnData = {
          ...state,
          projects: action.payload.projects,
          tags: action.payload.technologiesCounts,
          projectsIsLoading: false,
          projectsIsSuccessfull: true,
        };
        return returnData;
      })
      .addCase(fetchProjects.rejected, (state, action) => ({
        ...state,
        projectsError: action.payload,
        projectsIsLoading: false,
        projectsIsSuccessfull: false,
      }));
  },
});

export const { setProjectsInSlice } = projectsSlice.actions;
export default projectsSlice.reducer;
