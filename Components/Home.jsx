import React from 'react';

import PropTypes from 'prop-types';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     bordemLevel: 10,
     sleepLevel:10,
     foodLevel:10
    };
    this.startGame = this.startGame.bind(this);
  }
  startGame(){
    this.setState({foodLevel: foodLevel--});
    this.setState({sleepLevel:sleepLevel --});
    this.setState({bordomLevel:bordomLevel --});
  }
  componentDidMount() {
 this.startTimer = setInterval(() =>
   this.startGame(),
   3000
 );
}


  feedToma(){
    this.setState({foodLevel: foodLevel++});
  }
  sleepToma(){
    this.setState({sleepLevel: sleepLevel +=1});
  }
  feedToma(){
    this.setState({bordomLevel: bordomLevel +=1});
  }

  render(){

    return (
      <div>
        <button onClick={startGame}>Play game</button>
        <p>food level :{foodLevel}</p>
        <p>sleep level :{sleepLevel}</p>
        <p>bordomLevel :{bordemLevel}</p>
      </div>
    );
  }
}



export default Home;
