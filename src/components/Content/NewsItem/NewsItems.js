import { Button, Stack } from "react-bootstrap";

import React, { useState } from "react";
import Card from "../../UI/Card";
import ContentNewsItem from "./ContentNewsItem";
import styles from "./NewsItems.module.css";
import ModalAdd from "../../Modal/ModalAdd";

export default function NewsItems({ data }) {
  const [showModal, setShowModal] = useState(false);

  const modalToggle = () => setShowModal((prevCondition) => !prevCondition);

  return (
    <Stack>
      {data?.slice(0, 10).map((content, i) => (
        <Card key={i}>
          <ContentNewsItem content={content} id={i} />
        </Card>
      ))}

      <div className={styles["add-btn"]}>
        <Button size="lg" onClick={modalToggle}>
          +
        </Button>
      </div>

      <ModalAdd show={showModal} hide={modalToggle} />
    </Stack>
  );
}
