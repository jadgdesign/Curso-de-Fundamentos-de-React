import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  syncEmailChanges(email) {
    this.setState({
      email: email
    })
  }

  syncPasswordChanges(password) {    
    this.setState({
      password: password
    })
  }

  syncChanges(value, property) {
    let state = {};

    state[property] = value;
    this.setState(state);
  }

  submitForm = () => {
    console.log(this.state)
  }

  render() {
    return (
      <form>
        <input 
          // onChange={ (ev) => { this.syncChanges(ev.target.value, 'email') } }
          onChange={ (ev) => { this.syncEmailChanges(ev.target.value) } }
          type="email" 
          value={this.state.email} 
          placeholder="Email" />
        <input 
          // onChange={ (ev) => { this.syncChanges(ev.target.value, 'password') } }
          onChange={ (ev) => { this.syncPasswordChanges(ev.target.value) } }
          type="password" 
          value={this.state.password} 
          placeholder="******" />
        <div>
          <input 
            onClick={ this.submitForm }
            type="submit" 
            value="Iniciar sesión" />
        </div>
      </form>
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
        <Formulario />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
