import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search-slice",
  initialState: {
    keyword: "",
    site: [],
    news: [],
    image: [],
    category: "Search",
    res: { status: null, msg: "" },
  },
  reducers: {
    getSiteResult(state, action) {
      state.site = action.payload;
    },
    getNewsResult(state, action) {
      state.news = action.payload;
    },
    getImageResult(state, action) {
      state.image = action.payload;
    },
    saveKeyword(state, action) {
      state.keyword = action.payload;
    },
    changeStatus(state, action) {
      state.res = { status: action.payload.status, msg: action.payload.msg };
    },
    changeCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const searchAction = searchSlice.actions;
export default searchSlice.reducer;
