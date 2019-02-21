import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import * as ExternalStyle from '../src/assets/styles.js';
import skull from '/Users/Guest/desktop/Tamagotchi/src/assets/images/skull.png'
import Header from './Header'
class Home extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
     bordomLevel: 10,
     sleepLevel:10,
     foodLevel:10
    };
    this.handleStartGame = this.handleStartGame.bind(this);
    this.handleFeedToma = this.handleFeedToma.bind(this);
    this.handleSleepToma = this.handleSleepToma.bind(this);
    this.handleBordomToma = this.handleBordomToma.bind(this);
    this.handlePlayAgain = this.handlePlayAgain.bind(this);
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

   2000
 );
}

// props.componentWillUnmount(){
//   clearInterval(this.startTimer);
// }



  handleFeedToma(){
    this.setState({foodLevel: this.state.foodLevel+1});
  }



  handleSleepToma(){
    this.setState({sleepLevel: this.state.sleepLevel+1});
  }

  handleBordomToma(){
    this.setState({bordomLevel: this.state.bordomLevel +1});
  }
  handlePlayAgain(){
    this.setState({sleepLevel: 10})
    this.setState({foodLevel: 10})
    this.setState({bordomLevel: 10})
    this.componentDidMount();
  }



  render(){
    let main = {
      backgroundColor:'grey',
      fontSize:'40px',
    }
    if(this.state.foodLevel <= 0 || this.state.sleepLevel <= 0){
         clearInterval(this.startTimer);
      var displayThisAboutLife = <img src={skull}/>;
    } else {
      var displayThisAboutLife = <strong>Tomagotchi is alive</strong>;
    }
    return (
      <div style={main}>
        <button onClick={this.handleStartGame}>Play game</button>

        <p>food level :{this.state.foodLevel}</p>
        <p>sleep level :{this.state.sleepLevel}</p>
        <p>bordomLevel :{this.state.bordomLevel}</p>

        <button onClick={this.handleFeedToma}>feed</button>
        <button onClick={this.handleSleepToma}>sleep</button>
        <button onClick={this.handleBordomToma}>Play</button>
        <button onClick={this.handlePlayAgain}>Play again</button>
        <p>{displayThisAboutLife}</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>

    );
  }
}
// Home.propTypes = {
//   componentWillUnmount: PropTypes.func
// };



export default Home;
