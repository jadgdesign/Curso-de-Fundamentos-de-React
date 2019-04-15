import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function Contador(props) {
  // this.state = { contador : 0}
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Conteo: { contador }</p>
      <button onClick={ () => setContador(contador + 1 ) }>Aumentar</button>
    </div>
  )
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
