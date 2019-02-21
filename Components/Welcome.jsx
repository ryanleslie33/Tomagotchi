import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import toma from '../src/assets/images/toma.jpg';
import AddUser from './AddUser';
import UserList from './UserList';

function Welcome(props){
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
  

   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
    </div>
  );
}




export default Welcome;
