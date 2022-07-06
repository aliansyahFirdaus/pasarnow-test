import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchResult from "./pages/SearchResult";
import GeneralItems from "./components/Content/GeneralItem/GeneralItems";
import ImageItems from "./components/Content/ImageItem/ImageItems";
import NewsItems from "./components/Content/NewsItem/NewsItems";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResult />}>
          <Route path="all" element={<GeneralItems />} />
          <Route path="image" element={<ImageItems />} />
          <Route path="news" element={<NewsItems />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
