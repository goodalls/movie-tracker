import React, { Component } from 'react';
import Header from './Header/Header';
import MovieIndex from './MovieIndex';
import api from '../apiCalls';

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount = async () => {
    const testRun = await api.fetchParse(api.test);
    console.log(testRun);
  };

  render() {
    return (
      <div>
        <Header />
        <MovieIndex />
      </div>
    );
  }
}
