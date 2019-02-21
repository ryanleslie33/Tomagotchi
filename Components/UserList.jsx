import React from 'react';
import PropTypes from 'prop-types';
import User from './User';
import { Link } from 'react-router-dom';
import toma from '../src/assets/images/toma.jpg';
import AddUser from './AddUser';


class UserList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
}
render(){
  let style = {
    fontSize:'40px',
    display:'grid',
    backgroundColor:'#42f4e2'
  }
  return (
    <div style={style}>
  <p>Welcome to Tomagotchi</p>
  <img src={toma}/>
   <Link to="/Home">Click here to play game!!</Link>

    {this.props.userList.map((user) =>
      <User name={user.name}
        pet={user.pet}

    />
  )}
</div>
)
}
}
UserList.propTypes = {
  userList: PropTypes.array
}
export default UserList;
