import { createSlice } from "@reduxjs/toolkit";
import { postBlog } from "../../services/blogServices";

export const initialState = {
  postBlog: {},
  postBlogIsLoading: false,
  postBlogError: null,
  postBlogIsSuccessfull: false,
};

const postBlogSlice = createSlice({
  name: "BlogSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(postBlog.pending, (state) => ({
        ...state,
        postBlogIsLoading: true,
      }))
      .addCase(postBlog.fulfilled, (state, action) => {
        const returnData = {
          ...state,
          postBlog: action.payload.article,
          postBlogIsLoading: false,
          postBlogIsSuccessfull: true,
        };
        return returnData;
      })
      .addCase(postBlog.rejected, (state, action) => ({
        ...state,
        postBlogError: action.payload,
        postBlogIsLoading: false,
        postBlogIsSuccessfull: false,
      }));
  },
});

export default postBlogSlice.reducer;
