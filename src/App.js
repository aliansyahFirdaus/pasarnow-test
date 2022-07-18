import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import GeneralItems from "./components/Content/GeneralItem/GeneralItems";
import ImageItems from "./components/Content/ImageItem/ImageItems";
import NewsItems from "./components/Content/NewsItem/NewsItems";

function App() {
  const { site, status: siteStatus } = useSelector((state) => state.search);
  const { images, status: imagesStatus } = useSelector((state) => state.image);
  const { news, status: newsStatus } = useSelector((state) => state.news);


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchResult />}>
        <Route
          path="search"
          element={
            siteStatus.current === "success" ? (
              <GeneralItems
                data={{
                  site: site,
                  images: { data: images.slice(0, 7), status: imagesStatus },
                }}
              />
            ) : (
              <p>Loading...</p>
            )
          }
        />
        <Route
          path="image"
          element={
            imagesStatus.current === "success" ? (
              <ImageItems data={images} />
            ) : (
              <p>Loading...</p>
            )
          }
        />
        <Route
          path="news"
          element={
            newsStatus.current === "success" ? (
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
