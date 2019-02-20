import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     bordomLevel: 10,
     sleepLevel:10,
     foodLevel:3
    };
    this.handleStartGame = this.handleStartGame.bind(this);
    this.handleFeedToma = this.handleFeedToma.bind(this);
    this.handleSleepToma = this.handleSleepToma.bind(this);
    this.handleBordomToma = this.handleBordomToma.bind(this);
  }

  handleStartGame(){
    var tempFoodLevel = this.state.foodLevel;
    var tempSleepLevel = this.state.sleepLevel;
    var tempBordomLevel = this.state.bordomLevel;
    this.setState({foodLevel: tempFoodLevel -1});
    this.setState({sleepLevel: tempSleepLevel-1});
    this.setState({bordomLevel: tempBordomLevel-1});
  }


  componentDidMount() {
 this.startTimer = setInterval(() =>
   this.handleStartGame(),

   1000
 );
}


  handleFeedToma(){
    this.setState({foodLevel: this.state.foodLevel+1});
  }
  checkLife(){
  if(this.state.foodlevel=== 0){
    alert('hey your dead')
  }
  }

  handleSleepToma(){
    this.setState({sleepLevel: this.state.sleepLevel+1});
  }

  handleBordomToma(){
    this.setState({bordomLevel: this.state.bordomLevel +1});
  }


  render(){
    if(this.state.foodLevel <= 0){
      var displayThisWhenAlive = 'Tamagotchi is dead';
    } else {
      var displaythisWhenDead = 'Tomagotchi is alive';
    }
    return (
      <div>
        <button onClick={this.handleStartGame}>Play game</button>

        <p>food level :{this.state.foodLevel}</p>
        <p>sleep level :{this.state.sleepLevel}</p>
        <p>bordomLevel :{this.state.bordomLevel}</p>

        <button onClick={this.handleFeedToma}>feed</button>
        <button onClick={this.handleSleepToma}>sleep</button>
        <button onClick={this.handleBordomToma}>Play</button>
        <p>{displayThisWhenAlive}{displaythisWhenDead}</p>
      </div>

    );
  }
}



export default Home;
