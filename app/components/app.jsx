import React, { Component } from 'react';
import Header from './Header/Header';
import MovieIndex from './Movies/MovieIndex';
import api from '../apiCalls';
import { connect } from 'react-redux'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      favorites: []
    }
  }

  componentDidMount = async () => {
    this.fetchMovies()
    // this.props.getMovies();
  };
  
  fetchMovies = async () => {
    const {movies} = this.state;
    const testRun = await api.fetchParse(api.test);
    const moviesArray = api.movieCleaner(testRun);
    this.setState({movies: [...movies, ...moviesArray]})
    //call addMovies(moviesArray)  
    //put it in the store
    //create an action - load movies -
    // whose job is to take the movies and put it in the store
  }

  render() {
    const { movies } = this.state
    return (
      <div>
        <Header />
        <MovieIndex movies={movies}/>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  movies: store.moviesReducer
})

const mapDispatchToProps = (dispatch) => ({
  addMovies: (movies) => dispatch(addMovies(movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)