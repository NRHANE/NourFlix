import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({movies,text,rate}) => {
  return (
    <div className="list">
      { movies
      .filter (
        (el)=>
        el.title.toLowerCase().includes(text.toLowerCase()) && el.rate>=rate)
      .map((el)=>(
      < MovieCard movie={el}/>
      ))}

      
      
    </div>
  );
};

export default MovieList
