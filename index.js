import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [
        'Mi primer componenete en React',
        'Introducción a React',
        'Qué es React'
      ]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.articles.map((title) => {
            return <p>{ title }</p>
          })
        }
      </div>
    )
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let nombre = "José"
    return (
      <div>
        <Blog />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
