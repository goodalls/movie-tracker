import React, { Component } from 'react';
import Card from './Card/Card'

const MovieIndex = ({movies}) => {


  const elements = movies.map((movie, index)=>{
    return <Card title={movie.title} key={index}/>
  })

  
  return (
    <div>
    {elements}
    </div>
  )
  
}
export default MovieIndex;