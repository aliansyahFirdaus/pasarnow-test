import { Container, Row } from "react-bootstrap";

import React from "react";
import styles from "./Card.module.css";

export default function Card({ children }) {
  return (
    <Container fluid>
      <Row className={styles.card}>{children}</Row>
    </Container>
  );
}
