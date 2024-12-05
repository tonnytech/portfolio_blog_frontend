import { createSlice } from "@reduxjs/toolkit";
import { searchByTag } from "../../services/blogServices";

// Set the initial state
export const initialState = {
  tagBlog: {},
  tagBlogIsLoading: false,
  tagBlogError: null,
  tagBlogIsSuccessfull: false,
};

const tagSearchSlice = createSlice({
  name: "BlogSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(searchByTag.pending, (state) => ({
        ...state,
        tagBlogIsLoading: true,
      }))
      .addCase(searchByTag.fulfilled, (state, action) => {
        const returnData = {
          ...state,
          tagBlog: action.payload.articles,
          tagBlogIsLoading: false,
          tagBlogIsSuccessfull: true,
        };
        return returnData;
      })
      .addCase(searchByTag.rejected, (state, action) => ({
        ...state,
        tagBlogError: action.payload,
        tagBlogIsLoading: false,
        tagBlogIsSuccessfull: false,
      }));
  },
});

export default tagSearchSlice.reducer;
