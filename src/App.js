import React, { Component } from 'react';
import './App.css';
import Header from "./components/header/header"
import Square from "./components/square/square";
import images from "./images.json";
// import Board from "./components/board/board";

class App extends Component {
  
  state = {
    clicked: [],
    score: 0,
    hScore: 0
   }
  
  updateClicked = name => {
    if(this.state.clicked.indexOf(name)>-1){
      alert("You lose; good day! But seriously, go ahead and try again.")
      this.setState({ clicked: [] })
    
      if(this.state.score > this.state.hScore){
        this.setState({ hScore: this.state.score })
      }

      this.setState({ score: 0 })
      
      return;

    } else {
      var score = this.state.score;
      score++;

      if(score > this.state.hScore){
        this.setState({ hScore: score })
      }
      this.setState({ score: score })
    }

    let clicked = this.state.clicked
    clicked.push(name)    
    this.setState({ clicked })
    console.log(this.state.clicked)
  }

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
        <Header score={this.state.score} hScore={this.state.hScore}/>
          { this.randomImage().map(e => 
              ( 
                <Square  updateClicked={this.updateClicked} 
                        name={e.name} 
                        img={e.img}/> 
              ))
          }
      </div>
    );
  }
}

export default App;