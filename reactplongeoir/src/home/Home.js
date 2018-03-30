import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from './Header';
import Button from './Button';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        compteur: -1
      };
  }
  render() {
    return (
        <div>
            <Header compteur={this.state.compteur}/>
            <Button name="Soustraire"/>
            <Button name="Reset"/>
            <Button name="Ajouter"/>
        </div>
    );
  }
  
}

export default Home;
