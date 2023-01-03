import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import {
  categoriesPostSuccess,
  fetchCategoriesSuccess,
  fetchCategoriesWithDataSuccess,
  fetchCategoryDataSuccess,
} from "./slice";

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(appLoading());
      const response = await axios.get(`${apiUrl}/categories`);
      console.log("this is from /categories", response.data);
      dispatch(fetchCategoriesSuccess(response.data.categories));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
      dispatch(appDoneLoading());
    }
  };
};

export const fetchBlogDataPerCategory = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(appLoading());
      const response = await axios.get(`${apiUrl}/categories/${id}/blogs`);
      console.log("this is from /categories with blogs", response.data);
      dispatch(fetchCategoriesWithDataSuccess(response.data.blogs));
      dispatch(fetchCategoryDataSuccess(response.data.category));

      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
      dispatch(appDoneLoading());
    }
  };
};
