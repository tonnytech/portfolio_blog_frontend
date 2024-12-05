// import { createSlice } from "@reduxjs/toolkit";
// import { editBlog } from "../../services/blogServices";

// // Set the initial state
// export const initialState = {
//   editedBlog: {},
//   editedBlogIsLoading: false,
//   editedBlogError: null,
//   editedBlogIsSuccessfull: false,
// };

// const getBlogSlice = createSlice({
//   name: "editedBlog",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(editBlog.pending, (state) => ({
//         ...state,
//         editedBlogIsLoading: true,
//       }))
//       .addCase(editBlog.fulfilled, (state, action) => {
//         const returnData = {
//           ...state,
//           editedBlog: action.payload.article,
//           editedBlogIsLoading: false,
//           editedBlogIsSuccessfull: true,
//         };
//         return returnData;
//       })
//       .addCase(editBlog.rejected, (state, action) => ({
//         ...state,
//         editedBlogError: action.payload,
//         editedBlogIsLoading: false,
//         editedBlogIsSuccessfull: false,
//       }));
//   },
// });

// export default getBlogSlice.reducer;
