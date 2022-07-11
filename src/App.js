import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "./store/action/news-action";
import { fetchSearchData } from "./store/action/search-action";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import GeneralItems from "./components/Content/GeneralItem/GeneralItems";
import ImageItems from "./components/Content/ImageItem/ImageItems";
import NewsItems from "./components/Content/NewsItem/NewsItems";

import useQuery from "./hooks/useQuery";

let initial = true;

function App() {
  const [isScroll, setIsScroll] = useState(false);
  const [hideBtn, setHideBtn] = useState(false);

  const { site, image, category } = useSelector((state) => state.search);
  const { res } = useSelector((state) => state.status);
  const { news } = useSelector((state) => state.news);

  const scrollingHandler = () => setIsScroll(true);
  const dispatch = useDispatch();
  const query = useQuery();

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

    if (pathLowerCase === "news") {
      dispatch(fetchNews(query.get("search")));
    } else {
      dispatch(fetchSearchData(query.get("search"), pathLowerCase));
    }
  }, [dispatch]);

  return (
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
  );
}

export default App;
