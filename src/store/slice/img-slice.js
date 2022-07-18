import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
  name: "img-slice",
  initialState: {
    images: [],
    status: { current: "", msg: "" },
  },
  reducers: {
    getImagesResult(state, action) {
      state.images = action.payload.image_results;
    },
    changeStatus(state, action) {
      state.status.current = action.payload.current;
      state.status.msg = action.payload.msg || "";
    },
  },
});

export const imageAction = imageSlice.actions;
export default imageSlice.reducer;
