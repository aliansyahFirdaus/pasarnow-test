import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news-slice",
  initialState: {
    news: [],
    key: "",
  },
  reducers: {
    getNews(state, action) {
      state.news = action.payload;
    },
    setKey(state, action) {
      state.key = action.payload;
    },
  },
});

export const newsAction = newsSlice.actions;
export default newsSlice.reducer;
