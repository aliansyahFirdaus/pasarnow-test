import React from "react";

import { ToggleButton } from "react-bootstrap";
import styles from "./RadioButton.modules.css";

export default function RadioButton({ children, selected, onSelect, value }) {
  return (
    <ToggleButton
      onChange={onSelect}
      checked={selected === value}
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
