import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     bordomLevel: 10,
     sleepLevel:10,
     foodLevel:10
    };
    this.handleStartGame = this.handleStartGame.bind(this);
  }
  handleStartGame(){
    var tempFoodLevel = this.state.foodLevel;
    var tempSleepLevel = this.state.sleepLevel;
    var tempBordomLevel = this.state.bordomLevel;
    this.setState({tempFoodLevel: tempFoodLevel --});
    this.setState({sleepLevel: tempSleepLevel--});
    this.setState({bordomLevel: tempBordomLevel--});
  }

  componentDidMount() {
 this.startTimer = setInterval(() =>
   this.handleStartGame(),
   3000
 );
}


  feedToma(){
    this.setState({foodLevel: this.tempFoodLevel++});
  }
  sleepToma(){
    this.setState({sleepLevel: this.tempSleepLevel +=1});
  }
  bordomToma(){
    this.setState({bordomLevel: this.tempBordomLevel +=1});
  }


  render(){

    return (
      <div>
        <button onClick={this.handleStartGame}>Play game</button>
        <p>food level :{this.state.foodLevel}</p>
        <p>sleep level :{this.state.sleepLevel}</p>
        <p>bordomLevel :{this.state.bordomLevel}</p>
      </div>

    );
  }
}



export default Home;
