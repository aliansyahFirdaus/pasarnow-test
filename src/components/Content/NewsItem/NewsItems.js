import { Button, Stack } from "react-bootstrap";

import React, { useState } from "react";
import Card from "../../UI/Card";
import ContentNewsItem from "./ContentNewsItem";
import styles from "./NewsItems.module.css";
import ModalAdd from "../../Modal/ModalAdd";

export default function NewsItems({ data, hideBtn }) {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => setShowModal(true);
  const hideModalHandler = () => setShowModal(false);

  return (
    <Stack>
      {data.map((content) => (
        <Card>
          <ContentNewsItem content={content} />
        </Card>
      ))}

      <div className={`${hideBtn ? "d-none" : ""} ${styles["add-btn"]}`}>
        <Button size="lg" onClick={showModalHandler}>
          +
        </Button>
      </div>

      <ModalAdd show={showModal} hide={hideModalHandler} />
    </Stack>
  );
}
