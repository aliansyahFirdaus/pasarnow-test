import { newsAction } from "../slice/news-slice";

export const fetchNews = (keyword) => {
  return (dispatch) => {
    //fetch from API
    dispatch(newsAction.changeStatus({ success: "pending" }));
    fetch(`https://google-search3.p.rapidapi.com/api/v1/news/q=${keyword}`, {
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "US",
        "X-RapidAPI-Key": "9f2d6e1f8dmsh7b75a74a06991ecp1d7ddejsnca7556e37841",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    })
      .then((res) => res.json())

      //Migrate to DB
      .then((data) => {
        const dataBody = data.entries.slice(0, 10).map((content) => {
          let obj = {
            link: content.links[0]?.href || "#",
            source: content.source.title,
            title: content.title,
            published: content.published,
          };
          return obj;
        });

        return fetch(
          "https://pasarnow-test-app-default-rtdb.firebaseio.com/news.json",
          {
            method: "POST",
            body: JSON.stringify(dataBody),
          }
        );
      })

      //Get Data from DB
      .then(() => {
        return fetch(
          "https://pasarnow-test-app-default-rtdb.firebaseio.com/news.json"
        );
      })
      .then((res) => res.json())
      .then((data) => {
        const lastDataKey = Object.keys(data)[Object.keys(data).length - 1];

        dispatch(newsAction.getNews(data[lastDataKey]));
        dispatch(newsAction.setKey(lastDataKey));
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
    dispatch(newsAction.changeStatus({ success: "pending" }));
    fetch(`https://pasarnow-test-app-default-rtdb.firebaseio.com/news.json`, {
      method: "POST",
      body: JSON.stringify(data),
    })
      //Get data from DB
      .then(() => {
        return fetch(
          "https://pasarnow-test-app-default-rtdb.firebaseio.com/news.json"
        );
      })
      .then((res) => res.json())
      .then((data) => {
        const lastDataKey = Object.keys(data)[Object.keys(data).length - 1];

        dispatch(newsAction.getNews(data[lastDataKey]));
        dispatch(newsAction.setKey(lastDataKey));
        dispatch(newsAction.changeStatus({ current: "success" }));
      })
      .catch((err) => {
        dispatch(
          newsAction.changeStatus({ current: "fail", msg: err.message })
        );
      });
  };
};
