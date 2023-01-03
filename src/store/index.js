import { configureStore } from "@reduxjs/toolkit";

import feedbackReducer from "./feedback/slice";
import categoryReducer from "./categories/slice";
import blogReducer from "./blogs/slice";

export default configureStore({
  reducer: {
    feedback: feedbackReducer,
    category: categoryReducer,
    blog: blogReducer,
  },
});
