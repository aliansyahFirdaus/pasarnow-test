import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./slice/search-slice";
import imageReducer from "./slice/img-slice";
import newsReducer from "./slice/news-slice";

import statusReducer from "./slice/status-slice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    image: imageReducer,
    news: newsReducer,
  },
});

export default store;
