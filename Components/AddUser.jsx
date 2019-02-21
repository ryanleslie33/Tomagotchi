import PropTypes from 'prop-types';
import   React  from 'react';



class AddUser extends React.Component{
   _name :string;
   _pet:string;

  constructor(props){
    super(props);
    this.state={
    };

    this.handleNewPerson = this.handleNewPerson.bind(this);
  }

  handleNewPerson(event) {
    event.preventDefault();
    this.props.onNewUserCreation({name:this._name.value, pet:this._pet.value });
    this._name.value = '';
    this._pet.value = '';

  }


  render(){
    return (
      <div>
      <form onSubmit={this.handleNewPerson} >
      <input
      placeholder='name'
      ref={(input) => {this._name = input}}
      />
      <input
      placeholder='pet'
      ref={(input) => {this._pet = input}}
      />

      <button type='submit'>submit</button>
      </form>

      </div>
    )
  }

}
AddUser.propTypes = {
  onNewUserCreation: PropTypes.func
};



export default AddUser;
