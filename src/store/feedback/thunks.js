import { apiUrl } from "../../config/constants";
import axios from "axios";
// import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import {
  feedbackDeleteSuccess,
  fetchFeedbacksSuccess,
  /* artworksDetailsFetched,
  updateHeartsToArtworkDetails,
  updateBiddingToArtworkDetails,
  artworkPostSuccess,
  artworkDeleteSuccess,*/
} from "./slice";

export const fetchFeedbacks = () => {
  return async (dispatch, getState) => {
    try {
      //   dispatch(appLoading());
      const response = await axios.get(`${apiUrl}/feedbacks`);
      console.log("this is from /feedback", response.data);
      dispatch(fetchFeedbacksSuccess(response.data.feedbacks));
      //   dispatch(appDoneLoading());
    } catch (e) {
      console.log(e.message);
      //   dispatch(appDoneLoading());
    }
  };
};
