import { configureStore } from "@reduxjs/toolkit";
import getBlogsSlice from "./slices/blogsSlice";
import getBlogSlice from "./slices/blogSlice";
import getUserSlice from "./slices/userSlice";
import postBlogSlice from "./slices/postBlogSlice";
import tagSearchSlice from "./slices/tagSearchSlice";
import searchEngineSlice from "./slices/searchEngineSlice";
import projectsSlice from "./slices/projectsSlice";
import projectSlice from "./slices/projectSlice";

const store = configureStore({
  reducer: {
    allBlogs: getBlogsSlice,
    aBlog: getBlogSlice,
    adminUser: getUserSlice,
    postedBlog: postBlogSlice,
    tagSearch: tagSearchSlice,
    searchEngine: searchEngineSlice,
    allProjects: projectsSlice,
    aProject: projectSlice,
  },
});

export default store;
