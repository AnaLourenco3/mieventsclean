import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  blog: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    // blogPostSuccess: (state, action) => {
    //   state.blogs.push(action.payload);
    // },
    // fetchBlogsSuccess: (state, action) => {
    //   state.blogs = [...action.payload];
    // },

    fetchBlogSuccess: (state, action) => {
      state.blog = { ...action.payload };
    },

    updateBlogContentDetails: (state, action) => {
      state.blog = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const {
  // blogPostSuccess,
  // fetchBlogsSuccess,
  fetchBlogSuccess,

  updateBlogContentDetails,
} = blogSlice.actions;

export default blogSlice.reducer;
