import React from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Welcome from './Welcome'
import Header from './Header'
import AddUser from './AddUser'
import UserList from './UserList'



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        masterUserList: []
    };
  this.handleAddingNewUserToList = this.handleAddingNewUserToList.bind(this);
  }
  handleAddingNewUserToList(newUser) {
  var newMasterUserList = this.state.masterUserList.slice();
  newMasterUserList.push(newUser);
  this.setState({masterUserList: newMasterUserList});
}

  render(){


    return (
      <div>
      <Header/>
      <Switch>
      <Route exact path='/' render={()=><UserList userList={this.state.masterUserList} />} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/new' render={()=><AddUser onNewUserCreation={this.handleAddingNewUserToList} />} />
        // <Route exact path='/thing' render={()=><UserList userList={this.state.masterUserList} />} />
      </Switch>
      </div>
    );
  }
}

export default App;
