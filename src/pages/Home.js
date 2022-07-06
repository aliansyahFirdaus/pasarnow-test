import { Container, Stack } from "react-bootstrap";

import React from "react";
import Search from "../components/Search/Search";

export default function Home({
  changeCategoryHandler,
  typingHandler,
  focusHandler,

  keyword,
  focus,
  selected,
  isTyping,
}) {
  return (
    <Container>
      <Stack
        className="vh-100 justify-content-center align-items-center"
        gap={4}
      >
        <div>
          <img
            alt={"test"}
            src={
              isTyping
                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                : "https://lifeofahomeschoolersite.files.wordpress.com/2018/02/g-dots.gif"
            }
            width={180}
          />
        </div>
        <Search
          typingHandler={typingHandler}
          focusHandler={focusHandler}
          changeCategoryHandler={changeCategoryHandler}
          keyword={keyword}
          focus={focus}
          selected={selected}
        />
      </Stack>
    </Container>
  );
}
