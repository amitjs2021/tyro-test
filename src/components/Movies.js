import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../utility/context";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//no picture case
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  // const [loading, setLoading] = useState(false);

  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="movies">
      {movies &&
        movies.map((movie) => {
          const {
            imdbID: id,
            Poster: poster,
            Title: title,
            Year: year
          } = movie;

          return (
            <Link to={`/movies/${id}`} key={id} className="movie">
              <article>
                <LazyLoadImage
                  src={poster === "N/A" ? url : poster}
                  alt={title}
                  effect="blur"
                />
                <div className="movie-info">
                  <h4 className="title">{title}</h4>
                  <p>{year}</p>
                </div>
              </article>
            </Link>
          );
        })}
      {isLoading && <h2 className="loading">Loading...</h2>}
    </section>
  );
};

export default Movies;
