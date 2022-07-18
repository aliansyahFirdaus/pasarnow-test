import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news-slice",
  initialState: {
    news: [],
    status: { current: "", msg: "" },
  },
  reducers: {
    getNews(state, action) {
      state.news = action.payload.entries;
    },
    addNews(state, action) {
      state.news.unshift(action.payload);
    },
    deleteNews(state, action) {
      state.news = state.news.filter((_, i) => i !== action.payload)
    },
    changeStatus(state, action) {
      state.status.current = action.payload.current;
    },
  },
});

export const newsAction = newsSlice.actions;
export default newsSlice.reducer;
