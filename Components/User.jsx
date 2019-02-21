import React from 'react';
import PropTypes from 'prop-types';


function User(props) {
  let aboutStyle = {
    fontSize: "50px"
  }
  return (

    <div style={aboutStyle}>
      <h3> name: {props.name}</h3>
      <h3> pet: {props.pet}</h3>
    </div>
  );
}
User.propTypes = {

  name: PropTypes.string,
  pet: PropTypes.string,
};

export default User;
