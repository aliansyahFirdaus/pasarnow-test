import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import GeneralItems from "./components/Content/GeneralItem/GeneralItems";
import ImageItems from "./components/Content/ImageItem/ImageItems";
import NewsItems from "./components/Content/NewsItem/NewsItems";

function App() {
  const { site, image } = useSelector((state) => state.search);
  const { news } = useSelector((state) => state.news);
  const { res } = useSelector((state) => state.status);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchResult />}>
        <Route
          path="search"
          element={
            res.status === "success" ? (
              <GeneralItems
                data={{ site: site.results, images: image.image_results }}
              />
            ) : (
              <p>Loading...</p>
            )
          }
        />
        <Route
          path="image"
          element={
            res.status === "success" ? (
              <ImageItems data={image.image_results} />
            ) : (
              <p>Loading...</p>
            )
          }
        />
        <Route
          path="news"
          element={
            res.status === "success" ? (
              <NewsItems data={news} />
            ) : (
              <p>Loading...</p>
            )
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
