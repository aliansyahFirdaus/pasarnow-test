import { Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { searchAction } from "../../store/slice/all-slice";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchData } from "../../store/action/all-search-action";

import React from "react";
import RadioButton from "../UI/RadioButton";
import styles from "./CategoryButton.module.css";

export default function CategoryButton({ link }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { keyword } = useSelector((state) => state.all);

  const radioButtonHandler = (e) => {
    const pathLowerCase =
      e.target.value[0].toLowerCase() + e.target.value.slice(1);
    link && navigate(`${pathLowerCase}?search=${keyword}`);

    dispatch(searchAction.changeCategory(e.target.value));
    dispatch(fetchSearchData(keyword, pathLowerCase));
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
        Search
      </RadioButton>
      <RadioButton
        onSelect={radioButtonHandler}
        value="Image"
        goToPath="images"
      >
        Image
      </RadioButton>
      <RadioButton onSelect={radioButtonHandler} value="News" goToPath="news">
        News
      </RadioButton>
    </Stack>
  );
}
