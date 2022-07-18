import { Container } from "react-bootstrap";
import { Outlet, useLocation } from "react-router-dom";
import { fetchNews } from "../store/action/news-action";
import { fetchImageData } from "../store/action/img-action";
import { useDispatch } from "react-redux";
import { fetchSearchData } from "../store/action/search-action";

import React, { useContext, useEffect } from "react";
import styles from "./SearchResult.module.css";
import HeaderSearch from "../components/HeaderSearch/HeaderSearch";
import CategoryContex from "../store/contex/category-ctx";
import useQuery from "../hooks/useQuery";

export default function SearchResult() {
  const categoryCtx = useContext(CategoryContex);
  const query = useQuery();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    categoryCtx.changeCategory(location.pathname.split("/")[2]);

    switch (categoryCtx.category) {
      case "search":
        dispatch(fetchSearchData(query.get("search")));
        break;
      case "image":
        dispatch(fetchImageData(query.get("search")));
        break;
      case "news":
        dispatch(fetchNews(query.get("search")));
        break;
    }
  }, []);

  return (
    <Container fluid className={`${styles["container-result"]}`}>
      <HeaderSearch logo={true} />

      <div
        className={
          categoryCtx.category !== "image"
            ? styles.result
            : styles["result-image-tab"]
        }
      >
        <Outlet />
      </div>
    </Container>
  );
}
