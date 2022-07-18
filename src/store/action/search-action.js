import { searchAction } from "../slice/search-slice";
import { fetchImageData } from "./img-action";

export const fetchSearchData = (keyword) => {
  return (dispatch) => {
    dispatch(searchAction.changeStatus({ current: "pending" }));
    fetch(`https://google-search3.p.rapidapi.com/api/v1/search/q=${keyword}`, {
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "US",
        "X-RapidAPI-Key": "9f2d6e1f8dmsh7b75a74a06991ecp1d7ddejsnca7556e37841",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(searchAction.getSiteResult(data));
        dispatch(searchAction.changeStatus({ current: "success" }));
        dispatch(fetchImageData(keyword));
      })
      .catch((err) => {
        dispatch(
          searchAction.changeStatus({ current: "fail", msg: err.message })
        );
      });
  };
};
