import React, { Component } from 'react';
import Card from '../Card/Card';


const MovieIndex = ({ movies }) => {
  const elements = movies.map((movie, index)=>{
    return <Card title={movie.title} poster={movie.poster} key={index}/>
  })

  
  return (
    <div>
      {elements}
    </div>
  )
}


export default MovieIndex;