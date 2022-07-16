import { Dropdown, DropdownButton, Form, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchAction } from "../../store/slice/search-slice";
import { fetchSearchData } from "../../store/action/search-action";
import { fetchNews } from "../../store/action/news-action";

import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import useQuery from "../../hooks/useQuery";

export default function Search({ setIsTyping }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery()

  const { category } = useSelector((state) => state.search);
  
  // const [focus, setFocus] = useState(false);
  const [inputKeyword, setInputKeyword] = useState(query.get("search"));

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    const pathLowerCase = category[0].toLowerCase() + category.slice(1);

    if (!inputKeyword) return;

    dispatch(searchAction.saveKeyword(inputKeyword));

    pathLowerCase === "news"
      ? dispatch(fetchNews(inputKeyword))
      : dispatch(fetchSearchData(inputKeyword, pathLowerCase));

    navigate(`/search/${pathLowerCase}?search=${inputKeyword}`);
  };

  const changeCategoryHandler = (e) => {
    dispatch(searchAction.changeCategory(e.target.innerHTML));
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
        <DropdownButton title={category} className={styles["dropdown-menu"]}>
          <Dropdown.Item onClick={changeCategoryHandler}>Search</Dropdown.Item>
          <Dropdown.Item onClick={changeCategoryHandler}>Image</Dropdown.Item>
          <Dropdown.Item onClick={changeCategoryHandler}>News</Dropdown.Item>
        </DropdownButton>
      </Stack>
    </div>
  );
}
