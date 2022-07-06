import { useNavigate } from "react-router-dom";
import { Dropdown, DropdownButton, Form, Stack } from "react-bootstrap";

import React, { useState } from "react";
import styles from "./Search.module.css";

export default function Search({
  typingHandler,
  changeCategoryHandler,

  keyword,
  selected,
}) {
  const navigate = useNavigate();

  const [focus, setFocus] = useState(false);

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    const pathLowerCase = selected[0].toLowerCase() + selected.slice(1);
    navigate(`/search/${pathLowerCase}?search=${keyword}`);
  };

  const focusHandler = (val) => setFocus(val);

  return (
    <div className={styles["input-search"]}>
      {!focus && (
        <i className={`fa-solid fa-magnifying-glass ${styles.icon}`} />
      )}
      <Stack direction="horizontal">
        <Form onSubmit={searchSubmitHandler}>
          <Form.Control
            value={keyword}
            type="text"
            className={!focus ? styles.focus : ""}
            onFocus={() => focusHandler(true)}
            onBlur={() => focusHandler(false)}
            onChange={typingHandler}
          />
        </Form>
        <DropdownButton title={selected} className={styles["dropdown-menu"]}>
          <Dropdown.Item onClick={changeCategoryHandler}>All</Dropdown.Item>
          <Dropdown.Item onClick={changeCategoryHandler}>Image</Dropdown.Item>
          <Dropdown.Item onClick={changeCategoryHandler}>News</Dropdown.Item>
        </DropdownButton>
      </Stack>
    </div>
  );
}
