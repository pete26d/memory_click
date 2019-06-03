import React, { Component } from "react";
import "./square.css";

class Square extends Component {
  render(){
    return(
      <div className='click-item'>
        <img onClick={(props) => this.props.updateClicked(this.props.name)} name={this.props.name} className='ind-img' src={this.props.img} alt={this.props.name}/>
      </div>
    )
  }
}

export default Square;