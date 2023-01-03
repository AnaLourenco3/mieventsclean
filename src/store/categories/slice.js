import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  blogs: [],
  category: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    fetchCategoriesSuccess: (state, action) => {
      state.categories = [...action.payload];
    },
    fetchCategoriesWithDataSuccess: (state, action) => {
      state.blogs = [...action.payload];
    },
    fetchCategoryDataSuccess: (state, action) => {
      state.category = action.payload;
    },
    categoriesPostSuccess: (state, action) => {
      state.categories.push({ ...action.payload });
    },
  },
});

// Action creators are generated for each case reducer function
// as we add cases to our reducer we will also export the corresponding actions
export const {
  fetchCategoriesSuccess,
  categoriesPostSuccess,
  fetchCategoriesWithDataSuccess,
  fetchCategoryDataSuccess,
} = categorySlice.actions;

export default categorySlice.reducer;
