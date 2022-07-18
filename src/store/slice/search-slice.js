import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search-slice",
  initialState: {
    site: [],
    status: { current: "", msg: "" },
  },
  reducers: {
    getSiteResult(state, action) {
      state.site = action.payload.results;
    },
    changeStatus(state, action) {
      state.status.current = action.payload.current;
    },
  },
});

export const searchAction = searchSlice.actions;
export default searchSlice.reducer;
