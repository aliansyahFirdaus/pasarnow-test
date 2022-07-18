import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useFetch(keyword, category) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        `https://google-search3.p.rapidapi.com/api/v1/${category}/q=${keyword}`
      )
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(err?.msg);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [api]);

  return { data, loading, error };
}
