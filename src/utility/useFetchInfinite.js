import { useState, useEffect } from "react";
import API from '../api/api.config'

debugger
// const API_ENDPOINT = API.HOST + "?apikey=b26c507e"
// const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=b26c507e`

const useFetchInfinite = (urlParams, page) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  const urlPage = `&page=${page}`;

  const fetchMovies = async (url) => {
    console.log(url);
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        // setData(
        //   (oldData) => {
        //     if (urlParams && page === 1) {
        //       return data.Search || data;
        //     } else if (urlParams) {
        //       return [...oldData, ...(data.Search || data)];
        //     } else {
        //       return [...oldData, ...(data.Search || data)];
        //     }
        //   }
        //   // data.Search || data
        // );

        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}${urlPage}`);
  }, [fetchMovies, urlParams, page]);
  return { isLoading, error, data };
};

export default useFetchInfinite;
