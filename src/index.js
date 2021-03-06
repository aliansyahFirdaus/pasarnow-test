import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CategoryProvider } from "./store/contex/category-ctx";
import { persistor } from "./store";
import { PersistGate } from 'redux-persist/integration/react'

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import TimeAgo from "javascript-time-ago";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <CategoryProvider>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </CategoryProvider>
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
