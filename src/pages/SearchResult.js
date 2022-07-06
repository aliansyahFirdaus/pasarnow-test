import { Container, Stack } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

import React from "react";
import styles from "./SearchResult.module.css";
import RadioButton from "../components/UI/RadioButton";
import HeaderSearch from "../components/HeaderSearch/HeaderSearch";

export default function SearchResult({
  typingHandler,
  changeCategoryHandler,
  scrollingHandler,
  selectedHandler,

  keyword,
  selected,
}) {
  const navigate = useNavigate();

  const radioButtonHandler = (e) => {
    const pathLowerCase =
      e.target.value[0].toLowerCase() + e.target.value.slice(1);

    navigate(`${pathLowerCase}?search=${keyword}`);
    selectedHandler(e.target.value);
  };

  return (
    <Container
      fluid
      className="vh-100 py-4 p-0"
      style={{ overflow: "scroll" }}
      onScroll={scrollingHandler}
    >
      <HeaderSearch
        typingHandler={typingHandler}
        changeCategoryHandler={changeCategoryHandler}
        keyword={keyword}
        selected={selected}
      />

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

      <Outlet />
    </Container>
  );
}
