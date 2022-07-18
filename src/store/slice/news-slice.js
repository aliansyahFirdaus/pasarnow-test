import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news-slice",
  initialState: {
    news: [],
    key: "", //Firebase key
    status: { current: "", msg: "" },
  },
  reducers: {
    getNews(state, action) {
      state.news = action.payload;
    },
    setKey(state, action) {
      state.key = action.payload;
    },
    changeStatus(state, action) {
      state.status.current = action.payload.current;
    },
  },
});

export const newsAction = newsSlice.actions;
export default newsSlice.reducer;
