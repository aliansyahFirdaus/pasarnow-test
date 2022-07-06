import { Container, Stack } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";

import React from "react";
import styles from "./SearchResult.module.css";
import RadioButton from "../components/UI/RadioButton";
import HeaderSearch from "../components/HeaderSearch/HeaderSearch";

export default function SearchResult({
  typingHandler,
  focusHandler,
  changeCategoryHandler,
  scrollingHandler,
  selectedHandler,

  keyword,
  focus,
  selected,
}) {
  const navigate = useNavigate();

  const navigatePage = (e) => {
    const pathGenerate =
      e.target.value[0].toLowerCase() + e.target.value.slice(1);

    navigate(pathGenerate);
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
        focusHandler={focusHandler}
        changeCategoryHandler={changeCategoryHandler}
        keyword={keyword}
        focus={focus}
        selected={selected}
      />

      <Stack
        direction="horizontal"
        className={`${styles.radio} btn-group`}
        gap={2}
      >
        <RadioButton
          selected={selected}
          onSelect={navigatePage}
          value="All"
          goToPath="all"
        >
          All
        </RadioButton>
        <RadioButton
          selected={selected}
          onSelect={navigatePage}
          value="Image"
          goToPath="images"
        >
          Image
        </RadioButton>
        <RadioButton
          selected={selected}
          onSelect={navigatePage}
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
