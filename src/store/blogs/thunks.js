import { apiUrl } from "../../config/constants";
import axios from "axios";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { fetchBlogsSuccess, fetchBlogSuccess } from "./slice";

export const fetchBlogsData = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(appLoading());
      const response = await axios.get(`${apiUrl}/blogs`);
      console.log("this is from /blogs", response.data);
      dispatch(fetchBlogsSuccess(response.data.blogs));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
      dispatch(appDoneLoading());
    }
  };
};

export const fetchBlogDataById = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(appLoading());
      const response = await axios.get(`${apiUrl}/blogs/${id}`);
      console.log("this is from /blog", response.data);
      dispatch(fetchBlogSuccess(response.data.blog));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
      dispatch(appDoneLoading());
    }
  };
};
