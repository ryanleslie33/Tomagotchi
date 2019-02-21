import React from 'react';
import PropTypes from 'prop-types';

class UserList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    };
}
render(){
  return (
    <div>
    {this.props.userList.map((person) =>
      <User name={person.name}
        pet={person.pet}

    />
  )}</div>
)
}
}
UserList.propTypes = {
  userList: PropTypes.array
}
export default UserList;
