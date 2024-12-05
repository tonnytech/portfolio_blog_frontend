import { createSlice } from "@reduxjs/toolkit";
import { fetchBlog } from "../../services/blogServices";

// Set the initial state
export const initialState = {
  blog: {},
  blogIsLoading: false,
  blogError: null,
  blogIsSuccessfull: false,
};

const getBlogSlice = createSlice({
  name: "BlogSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => ({
        ...state,
        blogIsLoading: true,
      }))
      .addCase(fetchBlog.fulfilled, (state, action) => {
        const returnData = {
          ...state,
          blog: action.payload.article,
          blogIsLoading: false,
          blogIsSuccessfull: true,
        };
        return returnData;
      })
      .addCase(fetchBlog.rejected, (state, action) => ({
        ...state,
        blogError: action.payload,
        blogIsLoading: false,
        blogIsSuccessfull: false,
      }));
  },
});

export default getBlogSlice.reducer;
