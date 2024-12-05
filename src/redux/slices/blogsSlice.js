import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogs } from "../../services/blogServices";

// Set the initial state
export const initialState = {
  blogs: [],
  tags: [],
  blogsIsLoading: false,
  blogsError: null,
  blogsIsSuccessfull: false,
};

const getBlogsSlice = createSlice({
  name: "BlogSlice",
  initialState,
  reducers: {
    setBlogsInSlice: (state, action) => {
      state.blogs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => ({
        ...state,
        blogsIsLoading: true,
      }))
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        const returnData = {
          ...state,
          blogs: action.payload.articles,
          tags: action.payload.tagCounts,
          blogsIsLoading: false,
          blogsIsSuccessfull: true,
        };
        return returnData;
      })
      .addCase(fetchBlogs.rejected, (state, action) => ({
        ...state,
        error: action.payload,
        blogsIsLoading: false,
        blogsIsSuccessfull: false,
      }));
  },
});

export const { setBlogsInSlice } = getBlogsSlice.actions;
export default getBlogsSlice.reducer;
