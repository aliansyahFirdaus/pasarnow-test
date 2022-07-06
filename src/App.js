import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import GeneralItems from "./components/Content/GeneralItem/GeneralItems";
import ImageItems from "./components/Content/ImageItem/ImageItems";
import NewsItems from "./components/Content/NewsItem/NewsItems";

function App() {
  const [selected, setSelected] = useState("All");
  const [keyword, setKeyword] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [focus, setFocus] = useState(false);
  const [isScroll, setIsScroll] = useState(0);
  const [hideBtn, setHideBtn] = useState(false);

  const typingHandler = (e) => setKeyword(e.target.value);
  const changeCategoryHandler = (e) => setSelected(e.target.innerText);
  const focusHandler = (val) => setFocus(val);
  const scrollingHandler = () => setIsScroll((prev) => prev + 1);
  const selectedHandler = (value) => setSelected(value);

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsTyping(true);
    }, 500);

    return () => {
      clearTimeout(interval);
      setIsTyping(false);
    };
  }, [keyword]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setHideBtn(false);
    }, 700);

    return () => {
      clearInterval(interval);
      setHideBtn(true);
    };
  }, [isScroll]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              typingHandler={typingHandler}
              focusHandler={focusHandler}
              changeCategoryHandler={changeCategoryHandler}
              keyword={keyword}
              selected={selected}
              focus={focus}
              isTyping={isTyping}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchResult
              typingHandler={typingHandler}
              focusHandler={focusHandler}
              changeCategoryHandler={changeCategoryHandler}
              selectedHandler={selectedHandler}
              scrollingHandler={scrollingHandler}
              keyword={keyword}
              selected={selected}
              focus={focus}
            />
          }
        >
          <Route path="all" element={<GeneralItems data={""} />} />
          <Route path="image" element={<ImageItems data={""} />} />
          <Route
            path="news"
            element={<NewsItems data={""} hideBtn={hideBtn} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
