import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick(e){
        alert("You've clicked the button");
        console.log(e);
        console.log(e.target.name);
    }
    render() {
        return (
        <div>
            <button onClick={this.handleClick}>{this.props.name}</button>
        </div>
        );
  }
  
}

export default Button;