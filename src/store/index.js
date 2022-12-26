import { configureStore } from "@reduxjs/toolkit";

import feedbackReducer from "./feedback/slice";

export default configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});
