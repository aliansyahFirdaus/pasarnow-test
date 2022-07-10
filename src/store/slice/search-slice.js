import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search-slice",
  initialState: {
    keyword: "",
    site: [],
    image: [],
    category: "Search"
  },
  reducers: {
    getSiteResult(state, action) {
      state.site = action.payload;
    },
    getImageResult(state, action) {
      state.image = action.payload;
    },
    saveKeyword(state, action) {
      state.keyword = action.payload;
    },
    changeCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const searchAction = searchSlice.actions;
export default searchSlice.reducer;
