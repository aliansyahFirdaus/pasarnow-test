import { Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { searchAction } from "../../store/slice/search-slice";
import { useDispatch } from "react-redux";
import { fetchSearchData } from "../../store/action/search-action";
import { fetchNews } from "../../store/action/news-action";

import React from "react";
import RadioButton from "../UI/RadioButton";
import styles from "./CategoryButton.module.css";
import useQuery from "../../hooks/useQuery";

export default function CategoryButton({ link }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();

  const radioButtonHandler = (e) => {
    const pathLowerCase =
      e.target.value[0].toLowerCase() + e.target.value.slice(1);
    link && navigate(`${pathLowerCase}?search=${query.get("search")}`);

    dispatch(searchAction.changeCategory(e.target.value));

    if (pathLowerCase === "news") {
      dispatch(fetchNews(query.get("search")));
    } else {
      dispatch(fetchSearchData(query.get("search"), pathLowerCase));
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
        value="Search"
        goToPath="search"
      >
        <i class="fa-solid fa-magnifying-glass me-2" /> Search
      </RadioButton>
      <RadioButton
        onSelect={radioButtonHandler}
        value="Image"
        goToPath="images"
      >
        <i class="fa-solid fa-images me-2" /> Image
      </RadioButton>
      <RadioButton onSelect={radioButtonHandler} value="News" goToPath="news">
      <i class="fa-solid fa-newspaper me-2" /> News
      </RadioButton>
    </Stack>
  );
}
