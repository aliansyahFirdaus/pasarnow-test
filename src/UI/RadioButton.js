import React from "react";
import { Button } from "react-bootstrap";
import styles from "./RadioButton.modules.css";

export default function RadioButton({ children }) {
  return (
    <Button
      size="sm"
      className="rounded-pill px-3 flex-fill"
      variant="outline-secondary"
    >
      {children}
    </Button>
  );
}
