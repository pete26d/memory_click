import React, { Component } from "react";
import Header from "../header/header"
import Square from "../square/square";
import images from "../../images.json";

class Board extends Component {
  randomImage = () => {
    const newArr = [];
      while(newArr.length !== images.length){
        let image = images[Math.floor(Math.random()*images.length)];
        if(newArr.indexOf(image)<0){
          newArr.push(image)
        }
      }
    return newArr
  }
 
  render() {
    return (
      <div className="body">
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet"/>
        <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>  
        <Header score={this.props.score} hScore={this.props.hScore}/>
          { this.randomImage().map(e => 
              ( 
                <Square updateClicked={this.props.updateClicked} 
                        name={e.name} 
                        img={e.img}/> 
              ))
          }
      </div>
    );
  }
}

export default Board