import { Container, Stack } from "react-bootstrap";

import React, { useEffect, useState } from "react";
import styles from "./SearchResult.module.css";
import RadioButton from "../components/UI/RadioButton";
import Input from "../components/Search/Input";

import GeneralItems from "../components/Content/GeneralItem/GeneralItems";
import NewsItems from "../components/Content/NewsItem/NewsItems";
import ImageItems from "../components/Content/ImageItem/ImageItems";

export default function SearchResult() {
  const [hideBtn, setHideBtn] = useState(false);
  const [isScroll, setIsScroll] = useState(0);
  const [selected, setSelected] = useState("allcontent");

  const scrollingHandler = () => setIsScroll((prev) => prev + 1);
  const selectedHandler = (e) => setSelected(e.target.value);

  useEffect(() => {
    const interval = setTimeout(() => {
      setHideBtn(false);
    }, 700);

    return () => {
      clearInterval(interval);
      setHideBtn(true);
    };
  }, [isScroll]);

  return (
    <Container
      fluid
      className="vh-100 py-4 p-0"
      style={{ overflow: "scroll" }}
      onScroll={scrollingHandler}
    >
      <Stack gap={3} className={styles.header}>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            width={110}
          />
        </div>
        <Input />
      </Stack>

      <Stack
        direction="horizontal"
        className={`${styles.radio} btn-group`}
        gap={2}
      >
        <RadioButton
          selected={selected}
          onSelect={selectedHandler}
          value="allcontent"
        >
          All
        </RadioButton>
        <RadioButton
          selected={selected}
          onSelect={selectedHandler}
          value="image"
        >
          Image
        </RadioButton>
        <RadioButton
          selected={selected}
          onSelect={selectedHandler}
          value="news"
        >
          News
        </RadioButton>
      </Stack>

      <GeneralItems data={""} />
      <ImageItems data={""} />
      <NewsItems data={""} onScrolling={hideBtn} />
    </Container>
  );
}
