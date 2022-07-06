import { Container, Stack } from "react-bootstrap";

import React from "react";
import Search from "../components/Search/Search";
import Header from "../components/Header/Header";
import styles from "./Home.module.css"

export default function Home({
  changeCategoryHandler,
  typingHandler,
  selectedHandler,

  keyword,
  selected,
  isTyping,
}) {
  return (
    <Container className="vh-100">
      <Header
        selected={selected}
        keyword={keyword}
        selectedHandler={selectedHandler}
      />
      <Stack
        className="text-center mt-5"
        gap={4}
      >
        <div className={styles.logo}>
          <img
            alt={"test"}
            src={
              isTyping
                ? "https://i.ibb.co/0XGQxtv/ezgif-com-gif-maker.jpg"
                : "https://lifeofahomeschoolersite.files.wordpress.com/2018/02/g-dots.gif"
            }
          />
        </div>
        <Search
          typingHandler={typingHandler}
          changeCategoryHandler={changeCategoryHandler}
          keyword={keyword}
          selected={selected}
        />
      </Stack>
    </Container>
  );
}
