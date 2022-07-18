import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import searchReducer from "./slice/search-slice";
import imageReducer from "./slice/img-slice";
import newsReducer from "./slice/news-slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["news"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    search: searchReducer,
    image: imageReducer,
    news: newsReducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
