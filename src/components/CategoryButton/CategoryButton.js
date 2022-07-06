import { Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import React from "react";
import RadioButton from "../UI/RadioButton";
import styles from "./CategoryButton.module.css";

export default function CategoryButton({ selected, selectedHandler, link, keyword }) {
  const navigate = useNavigate();

  const radioButtonHandler = (e) => {
    const pathLowerCase =
      e.target.value[0].toLowerCase() + e.target.value.slice(1);

    {
      link && navigate(`${pathLowerCase}?search=${keyword}`);
    }

    selectedHandler(e.target.value);
  };

  return (
    <Stack
      direction="horizontal"
      className={`${styles.radio} btn-group`}
      gap={2}
    >
      <RadioButton
        selected={selected}
        onSelect={radioButtonHandler}
        value="All"
        goToPath="all"
      >
        All
      </RadioButton>
      <RadioButton
        selected={selected}
        onSelect={radioButtonHandler}
        value="Image"
        goToPath="images"
      >
        Image
      </RadioButton>
      <RadioButton
        selected={selected}
        onSelect={radioButtonHandler}
        value="News"
        goToPath="news"
      >
        News
      </RadioButton>
    </Stack>
  );
}
