import { newsAction } from "../slice/news-slice";

export const fetchNews = (keyword) => {
  return (dispatch) => {
    dispatch(newsAction.changeStatus({ current: "pending" }));

    fetch(`https://google-search3.p.rapidapi.com/api/v1/news/q=${keyword}`, {
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "US",
        "X-RapidAPI-Key": "9f2d6e1f8dmsh7b75a74a06991ecp1d7ddejsnca7556e37841",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(newsAction.getNews(data));
        dispatch(newsAction.changeStatus({ current: "success" }));
      })
      .catch((err) => {
        dispatch(
          newsAction.changeStatus({ current: "fail", msg: err.message })
        );
      });
  };
};

export const addNews = (data) => {
  return (dispatch) => {
    dispatch(newsAction.addNews(data));
  };
};
