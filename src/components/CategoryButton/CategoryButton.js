import { Stack } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchData } from "../../store/action/search-action";
import { fetchNews } from "../../store/action/news-action";
import { fetchImageData } from "../../store/action/img-action";

import React, { useContext } from "react";
import RadioButton from "../UI/RadioButton";
import styles from "./CategoryButton.module.css";
import useQuery from "../../hooks/useQuery";
import CategoryContex from "../../store/contex/category-ctx";

export default function CategoryButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();
  const location = useLocation();

  const { site } = useSelector((state) => state.search);
  const { images } = useSelector((state) => state.image);
  const { news } = useSelector((state) => state.news);

  const categoryCtx = useContext(CategoryContex);

  const radioButtonHandler = (e) => {
    categoryCtx.changeCategory(e.target.value);

    navigate(`${e.target.value}?search=${query.get("search")}`);

    switch (location.pathname.split("/")[2]) {
      case "search":
        if (!site) dispatch(fetchSearchData(query.get("search")));
        break;
      case "image":
        if (images) dispatch(fetchImageData(query.get("search")));
        break;
      case "news":
        if (news) dispatch(fetchNews(query.get("search")));
        break;
    }
  };

  return (
    <Stack
      direction="horizontal"
      className={`${styles.radio} btn-group`}
      gap={2}
    >
      <RadioButton
        onSelect={radioButtonHandler}
        value="search"
        goToPath="search"
      >
        <i class="fa-solid fa-magnifying-glass me-2" /> Search
      </RadioButton>
      <RadioButton
        onSelect={radioButtonHandler}
        value="image"
        goToPath="images"
      >
        <i class="fa-solid fa-images me-2" /> Image
      </RadioButton>
      <RadioButton onSelect={radioButtonHandler} value="news" goToPath="news">
        <i class="fa-solid fa-newspaper me-2" /> News
      </RadioButton>
    </Stack>
  );
}
