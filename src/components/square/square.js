import React, { Component } from "react";
import "./square.css";



class Square extends Component {
  
  createSquare = (props) => {
    let background = this.props.img;

    let sqStyle = {
      backgroundImage: "url(" + background + ")"
    };

    return (<div className="click-item" style={ sqStyle } onClick={(props) => this.props.updateClicked(this.props.name)} name={this.props.name}>
  </div>)
  }

  render() {
    
    return( this.createSquare() )
  }
}

export default Square;