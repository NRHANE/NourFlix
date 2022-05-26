import React from "react";
const MovieCard = ({ movie }) => {
  return (
    <div className="moviecard">
      <img
      src={movie.posterUrl}
      alt={movie.title}
      />
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <button>{movie.rate}</button>
    </div>
  );
};

export default MovieCard;
