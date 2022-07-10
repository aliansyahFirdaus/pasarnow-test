import { configureStore } from "@reduxjs/toolkit";

import saerchAllReducer from "./slice/all-slice";

const store = configureStore({
  reducer: { all: saerchAllReducer },
});

export default store;
