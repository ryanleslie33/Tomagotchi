import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Welcome from './Welcome'
import Header from './Header'


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render(){


    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={Welcome} />
      <Route exact path='/home' component={Home} />
      </Switch>
      </div>
    );
  }
}

export default App;
