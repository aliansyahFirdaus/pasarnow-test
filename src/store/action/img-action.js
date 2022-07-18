import { imageAction } from "../slice/img-slice";

export const fetchImageData = (keyword) => {
  return (dispatch) => {
    dispatch(imageAction.changeStatus({ current: "pending" }));
    fetch(`https://google-search3.p.rapidapi.com/api/v1/image/q=${keyword}`, {
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "US",
        "X-RapidAPI-Key": "9f2d6e1f8dmsh7b75a74a06991ecp1d7ddejsnca7556e37841",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(imageAction.getImagesResult(data));
        dispatch(imageAction.changeStatus({ current: "success" }));
      })
      .catch((err) => {
        dispatch(
          imageAction.changeStatus({ current: "fail", msg: err.message })
        );
      });
  };
};
