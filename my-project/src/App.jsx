import React from "react";
import Loading from "./loading";

class App extends React.Component {
  state = {
    health: 3,
    move: true,
    clickClass: false,
    isLoading: true,
    countStart: 0,
    isCountStart: true,
  }


  handleClick = (event) => {
    this.startGame()
    this.className = this.state.clickClass ? 'choice true one' : 'choice false one';
    this.setState({clickClass: this.state.clickClass = true})
    if (event.currentTarget.className === this.className) {
      return event.currentTarget.className = this.className;
    }
  }

  handleClick2 = (event) => {
    this.className2 = this.state.clickClass ? 'choice true-two' : 'choice false-two';
    this.setState({clickClass: this.state.clickClass = true})
    if (event.currentTarget.className === this.className2) {
      event.currentTarget.className = this.className2;
      console.log(event.currentTarget.className)
    }
  }

  handleClick3 = (event) => {
    this.className3 = this.state.clickClass ? 'choice true-three' : 'choice false-three';
    this.setState({clickClass: this.state.clickClass = true})
    if (event.currentTarget.className === this.className3) {
      event.currentTarget.className = this.className3;
      console.log(event.currentTarget.className)
    }
  }

  startGame = () => {
    if (this.className === 'choice true one') {
      console.log('true')
    }
  }

  render() {
    return (
      this.state.isLoading ? <div className="App">
      <header className="App_header">
        <div className="container">
          <div className="game">
            <div className="game-bar">
              <h3 className="game-bar-health">Ваши жизни: {this.state.health}</h3>
            </div>
            <div className="game-fild">
              { this.state.isCountStart ? 
                <h1 className="game-count-start-false">Выберите фигуру для начала игры</h1> :
                <h1 className="game-count-start-start">{this.state.countStart}</h1>}
            </div>
          </div>

          <div className="block-1">
            <img onClick={this.handleClick} className={this.className} src={require('./img/stone.png')} alt="" />
            <img onClick={this.handleClick2} className={this.className2} src={require('./img/hand.png')} alt="" />
            <img onClick={this.handleClick3} className={this.className3} src={require('./img/papper.png')} alt="" />
          </div>
        </div>
      </header>
    </div> : <Loading isLoading={this.state.isLoading}/>
    )
  }
}

export default App;
