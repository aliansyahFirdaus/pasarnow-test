import { Dropdown, DropdownButton, Form, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { searchAction } from "../../store/slice/search-slice";
import { fetchSearchData } from "../../store/action/search-action";
import { fetchNews } from "../../store/action/news-action";
import { useContext } from "react";

import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import useQuery from "../../hooks/useQuery";
import CategoryContex from "../../store/contex/category-ctx";

export default function Search({ setIsTyping }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();
  const categoryCtx = useContext(CategoryContex);
  // const location = useLocation();

  const [inputKeyword, setInputKeyword] = useState(query.get("search"));
  // const [focus, setFocus] = useState(false);

  const searchSubmitHandler = (e) => {
    e.preventDefault();

    if (!inputKeyword) return;

    categoryCtx.category === "news"
      ? dispatch(fetchNews(inputKeyword))
      : dispatch(fetchSearchData(inputKeyword));

    navigate(
      `/search/${categoryCtx.category}?search=${inputKeyword}`
    );
  };

  const changeCategoryHandler = (e) => {
    categoryCtx.changeCategory(e.target.innerHTML)
  };

  const typingHandler = (e) => setInputKeyword(e.target.value);
  // const focusHandler = (val) => setFocus(val);

  useEffect(() => {
    if (setIsTyping) {
      const interval = setTimeout(() => {
        setIsTyping(true);
      }, 500);

      return () => {
        clearTimeout(interval);
        setIsTyping(false);
      };
    }
  }, [inputKeyword]);

  return (
    <div className={styles["input-search"]}>
      {/* {!focus && (
        <i className={`fa-solid fa-magnifying-glass ${styles.icon}`} />
      )} */}
      <i className={`fa-solid fa-magnifying-glass ${styles.icon}`} />
      <Stack direction="horizontal">
        <Form onSubmit={searchSubmitHandler}>
          <Form.Control
            value={inputKeyword}
            type="search"
            className={styles.focus}
            // onFocus={() => focusHandler(true)}
            // onBlur={() => focusHandler(false)}
            onChange={typingHandler}
          />
        </Form>
        <DropdownButton title={categoryCtx.category} className={styles["dropdown-menu"]}>
          <Dropdown.Item onClick={changeCategoryHandler}>search</Dropdown.Item>
          <Dropdown.Item onClick={changeCategoryHandler}>image</Dropdown.Item>
          <Dropdown.Item onClick={changeCategoryHandler}>news</Dropdown.Item>
        </DropdownButton>
      </Stack>
    </div>
  );
}
