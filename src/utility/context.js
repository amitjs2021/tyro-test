import React, { useState, useContext, useEffect } from "react";
// make sure to use https
import API from "../api/api.config";

import useFetch from "./useFetch";
// export const API_ENDPOINT = API.HOST + "?apikey=" + API.KEY;
// export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=b26c507e`;


console.log(API_ENDPOINT)
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const [page, setPage] = useState(1);
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`, page);

  return (
    <AppContext.Provider
      value={{ isLoading, error, movies, query, setQuery, page, setPage }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
