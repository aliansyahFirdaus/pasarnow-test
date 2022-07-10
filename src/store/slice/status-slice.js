import { createSlice } from "@reduxjs/toolkit";

const statusSlice = createSlice({
  name: "status-slice",
  initialState: { res: { status: null, msg: "" } },
  reducers: {
    changeStatus(state, action) {
      state.res = { status: action.payload.status, msg: action.payload.msg };
    },
  },
});

export const statusAction = statusSlice.actions;
export default statusSlice.reducer;
