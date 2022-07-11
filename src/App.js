import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "./store/action/news-action";
import { fetchSearchData } from "./store/action/search-action";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import GeneralItems from "./components/Content/GeneralItem/GeneralItems";
import ImageItems from "./components/Content/ImageItem/ImageItems";
import NewsItems from "./components/Content/NewsItem/NewsItems";

let initial = true;

function App() {
  const [isScroll, setIsScroll] = useState(false);
  const [hideBtn, setHideBtn] = useState(false);

  const { site, image, category, keyword } = useSelector(
    (state) => state.search
  );
  const { res } = useSelector((state) => state.status);
  const { news } = useSelector((state) => state.news);

  const scrollingHandler = () => setIsScroll(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setTimeout(() => {
      setHideBtn(false);
    }, 700);

    return () => {
      clearInterval(interval);
      setHideBtn(true);
    };
  }, [isScroll]);

  useEffect(() => {
    if (initial) {
      initial = false;
      return;
    }

    const pathLowerCase = category[0].toLowerCase() + category.slice(1);

    console.log(keyword, category, res, "======");

    if (pathLowerCase === "news") {
      if (news.length === 0) dispatch(fetchNews(keyword));
    } else {
      if (site.length === 0 || image.length === 0)
        dispatch(fetchSearchData(keyword, pathLowerCase));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search"
          element={<SearchResult scrollingHandler={scrollingHandler} />}
        >
          <Route
            path="search"
            element={
              res.status === "success" && <GeneralItems data={site.results} />
            }
          />
          <Route
            path="image"
            element={
              res.status === "success" && (
                <ImageItems data={image.image_results} />
              )
            }
          />
          <Route
            path="news"
            element={
              res.status === "success" && (
                <NewsItems data={news} hideBtn={hideBtn} />
              )
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
