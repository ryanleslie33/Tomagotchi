import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render(){


    return (
      <div>
      
      <Switch>
      <Route exact path='/' component={Home} />
      </Switch>
      </div>
    );
  }
}

export default App;
