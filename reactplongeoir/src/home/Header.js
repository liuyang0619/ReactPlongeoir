import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
    constructor(props) {
        super(props);
      }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Valeur du compteur {this.props.compteur}</h1>
        </header>
      </div>
    );
  }
}

export default Header;
