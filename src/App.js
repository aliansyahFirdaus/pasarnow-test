import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import GeneralItems from "./components/Content/GeneralItem/GeneralItems";
import ImageItems from "./components/Content/ImageItem/ImageItems";
import NewsItems from "./components/Content/NewsItem/NewsItems";

function App() {
  const [isScroll, setIsScroll] = useState(false);
  const [hideBtn, setHideBtn] = useState(false);

  const { site, image, news, res } = useSelector((state) => state.all);

  const scrollingHandler = () => setIsScroll(true);

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
                <NewsItems data={news.entries} hideBtn={hideBtn} />
              )
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
