import { searchAction } from "../slice/search-slice";
import { statusAction } from "../slice/status-slice";

export const fetchSearchData = (keyword) => {
  // console.log(keyword, category, "Lines 5");
  return (dispatch) => {
    dispatch(statusAction.changeStatus({ status: "pending", msg: "wait..." }));
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
        dispatch(searchAction.getImageResult(data));
        dispatch(statusAction.changeStatus({ status: "success", msg: "done" }));
        return fetch(
          `https://google-search3.p.rapidapi.com/api/v1/image/q=${keyword}`,
          {
            headers: {
              "X-User-Agent": "desktop",
              "X-Proxy-Location": "US",
              "X-RapidAPI-Key":
                "9f2d6e1f8dmsh7b75a74a06991ecp1d7ddejsnca7556e37841",
              "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
            },
          }
        );
      })
      .then((res) => res.json())
      .then((data) => {
        dispatch(searchAction.getImageResult(data));
        dispatch(statusAction.changeStatus({ status: "success", msg: "done" }));
      })
      .catch((err) => {
        dispatch(
          statusAction.changeStatus({ status: "fail", msg: err.message })
        );
      });
  };
};
