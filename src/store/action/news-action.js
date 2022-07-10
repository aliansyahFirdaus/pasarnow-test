import { newsAction } from "../slice/news-slice";
import { statusAction } from "../slice/status-slice";

export const fetchNews = (keyword) => {
  return (dispatch) => {
    //fetch from API
    dispatch(statusAction.changeStatus({ status: "pending", msg: "wait..." }));
    fetch(`https://google-search3.p.rapidapi.com/api/v1/news/q=${keyword}`, {
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "US",
        "X-RapidAPI-Key": "4f714d2c2fmsh61888d51410a862p1ba231jsnf46d052e9373",
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
        dispatch(statusAction.changeStatus({ status: "success", msg: "done" }));
      })
      .catch((err) => {
        dispatch(
          statusAction.changeStatus({ status: "fail", msg: err.message })
        );
      });
  };
};

export const addNews = (data) => {
  return (dispatch) => {
    dispatch(statusAction.changeStatus({ status: "pending", msg: "wait..." }));
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
        dispatch(statusAction.changeStatus({ status: "success", msg: "done" }));
      })
      .catch((err) => {
        dispatch(
          statusAction.changeStatus({ status: "fail", msg: err.message })
        );
      });
  };
};
