import { Container, Stack } from "react-bootstrap";

import React, { useState } from "react";
import Search from "../components/Search/Search";
import styles from "./Home.module.css";

export default function Home() {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <Container className={styles.container}>
      <Stack gap={3}>
        <div className={styles.logo}>
          <img
            alt={"google-logo"}
            src={
              isTyping
                ? "https://i.ibb.co/0XGQxtv/ezgif-com-gif-maker.jpg"
                : "https://lifeofahomeschoolersite.files.wordpress.com/2018/02/g-dots.gif"
            }
          />
        </div>
        <div className={styles.search}>
          <Search setIsTyping={setIsTyping} />
        </div>
      </Stack>
    </Container>
  );
}
