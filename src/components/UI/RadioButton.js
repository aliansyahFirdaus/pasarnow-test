import React from "react";

import { ToggleButton } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "./RadioButton.modules.css";

export default function RadioButton({ children, onSelect, value }) {
  const { category } = useSelector((state) => state.search);

  return (
    <ToggleButton
      onChange={onSelect}
      checked={category === value}
      id={value}
      value={value}
      size="sm"
      type="radio"
      className="rounded-pill px-3 flex-fill"
      variant="outline-secondary"
    >
      {children}
    </ToggleButton>
  );
}
