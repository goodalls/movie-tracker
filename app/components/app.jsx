import React, { Component } from 'react';
import Header from './Header/Header';
import CardContainer from './CardContainer/CardContainer'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <CardContainer />
      </div>
    );
  }
}
