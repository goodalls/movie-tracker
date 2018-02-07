import React, { Component } from 'react';
import Header from './Header/Header';
import MovieIndex from './MovieIndex';
import api from '../apiCalls';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      favorites: []
    }
  }

  componentDidMount = async () => {
    this.fetchMovies()
    this.props.getMovies();
  };
  
  fetchMovies = async () => {
    const {movies} = this.state;
    const testRun = await api.fetchParse(api.test);
    const moviesArray = api.movieCleaner(testRun);
    this.setState({movies: [...movies, ...moviesArray]})
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
  getMovies: (movies) => dispatch(addMovies(this.state.movies))
})