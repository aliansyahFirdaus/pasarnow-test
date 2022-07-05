import { Dropdown, DropdownButton, Form, Stack } from "react-bootstrap";

import React, { useEffect, useState } from "react";
import styles from "./Input.module.css";

export default function Input({ onTyping }) {
  const [focus, setFocus] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("Search");

  const typingHandler = (e) => {
    setKeyword(e.target.value);
  };

  const changeCategoryHandler = (e) => {
    e.preventDefault();
    setCategory(e.target.innerText);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      onTyping?.(true);
    }, 500);

    return () => {
      clearTimeout(interval);
      onTyping?.(false);
    };
  }, [keyword]);

  return (
    <div className={styles["input-search"]}>
      {!focus && (
        <i className={`fa-solid fa-magnifying-glass ${styles.icon}`} />
      )}
      <Stack direction="horizontal">
        <Form.Control
          type="text"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={typingHandler}
        />
        <DropdownButton title={category} className={styles["dropdown-menu"]}>
          <Dropdown.Item onClick={changeCategoryHandler}>Image</Dropdown.Item>
          <Dropdown.Item onClick={changeCategoryHandler}>News</Dropdown.Item>
        </DropdownButton>
      </Stack>
    </div>
  );
}
