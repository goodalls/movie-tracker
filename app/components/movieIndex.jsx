import React, { Component } from 'react';
import Card from './Card/Card';


const MovieIndex = () => {
  const {movies} = this.props;

  const elements = movies.map((movie, index)=>{
    return <Card title={movie.title} poster={movie.poster} key={index}/>
  })

  
  return (
    <div>
      {elements}
    </div>
  )
}
const mapStateToProps = (state) => ({
  movies: state.moviesReducer
})

const mapDispatchToProps = (dispatch) => ({
  getMovies: (movies) => dispatch(getMovies(movies))
})
export default MovieIndex;