import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./slice/search-slice";
import statusReducer from "./slice/status-slice";
import newsReducer from "./slice/news-slice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    status: statusReducer,
    news: newsReducer,
  },
});

export default store;
