import { searchAction } from "../slice/all-slice";

export const fetchSearchData = (keyword, category) => {
  console.log(category)
  return (dispatch) => {
    dispatch(searchAction.changeStatus({ status: "pending", msg: "wait..." }));
    fetch(
      `https://google-search3.p.rapidapi.com/api/v1/${category}/q=${keyword}`,
      {
        headers: {
          "X-User-Agent": "desktop",
          "X-Proxy-Location": "US",
          "X-RapidAPI-Key":
            "4f714d2c2fmsh61888d51410a862p1ba231jsnf46d052e9373",
          "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (category === "search") dispatch(searchAction.getSiteResult(data));
        if (category === "image") dispatch(searchAction.getImageResult(data));
        if (category === "news") dispatch(searchAction.getNewsResult(data));
        dispatch(searchAction.changeStatus({ status: "success", msg: "done" }));
      })
      .catch((err) => {
        dispatch(
          searchAction.changeStatus({ status: "fail", msg: err.message })
        );
      });
  };
};
