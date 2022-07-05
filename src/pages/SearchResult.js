import { Container, Stack } from "react-bootstrap";

import React from "react";
import Input from "../search/Input";
import Card from "../UI/Card";
import ContentGeneral from "../components/content/ContentGeneral";
import styles from "./SearchResult.module.css";
import RadioButton from "../UI/RadioButton";

export default function SearchResult() {
  return (
    <Container fluid className="vh-100 py-4 p-0">
      <Stack gap={3} className={styles.header}>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            width={110}
          />
        </div>
        <Input />
      </Stack>

      <Stack direction="horizontal" className={styles.radio} gap={2}>
        <RadioButton>All</RadioButton>
        <RadioButton>Image</RadioButton>
        <RadioButton>News</RadioButton>
      </Stack>

      <Stack>
        <Card>
          <ContentGeneral />
        </Card>
        <Card>
          <ContentGeneral />
        </Card>
        <Card>
          <ContentGeneral />
        </Card>
      </Stack>
    </Container>
  );
}
