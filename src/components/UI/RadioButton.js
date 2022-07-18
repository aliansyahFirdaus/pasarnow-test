import { useSelector } from "react-redux";
import { ToggleButton } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import React from "react";
import styles from "./RadioButton.module.css";

export default function RadioButton({ children, onSelect, value }) {
  const location = useLocation();

  return (
    <ToggleButton
      onChange={onSelect}
      checked={location.pathname.split("/")[2] === value}
      id={value}
      value={value}
      size="sm"
      type="radio"
      className={`${styles["radio-button"]} px-3 flex-fill`}
      variant="outline-secondary"
    >
      {children}
    </ToggleButton>
  );
}
