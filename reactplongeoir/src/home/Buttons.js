import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Boostrap } from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
    handleClick(compteur){
        if (this.props.Soustraire){
            this.props.Soustraire(compteur);
        }
        else if (this.props.Reset){
            this.props.Reset(compteur);
        }
        else if (this.props.Ajouter){
            this.props.Ajouter(compteur);
        }
    }
    render() {
        return (
        <div class='button'>
            <button color='primary' size='lg' onClick={ compteur => {this.handleClick(this.props.compteur)}}>{this.props.name}</button>
        </div>
        );
  }
}

export default Buttons;