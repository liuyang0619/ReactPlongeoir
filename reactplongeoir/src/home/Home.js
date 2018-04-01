import React, { Component } from 'react';
import logo from '../logo.svg';
import Header from './Header';
import Buttons from './Buttons';
import Css from './Home.css';
import { Boostrap } from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        compteur: -1
      };
    this.Soustraire = this.Soustraire.bind(this);
    this.Reset = this.Reset.bind(this);
    this.Ajouter = this.Ajouter.bind(this);
  }

  Soustraire(compteur){
    console.log('Soustraire function');
    
    if(compteur > -10){
      this.setState({compteur : compteur - 1});
    }
    else{
      alert('You have reached the minimum limit !');
    }
  }

  Reset(compteur){
    console.log('Reset function');
    this.setState({compteur : 0});
  }

  Ajouter(compteur){
    console.log('Ajouter function');
    if(compteur < 10){
      this.setState({compteur : compteur + 1});
    }
    else{
      alert('You have reached the minimum limit !');
    }
  }
  render() {
    return (
        <div>
            <Header compteur={this.state.compteur}/>
            <div class='buttons'>
              <Buttons name="Soustraire"  Soustraire={this.Soustraire} compteur={this.state.compteur}/>
              <Buttons name="Reset" Reset={this.Reset} compteur={this.state.compteur}/>
              <Buttons name="Ajouter" Ajouter={this.Ajouter} compteur={this.state.compteur}/>
            </div>
        </div>
    );
  }
  
}

export default Home;
