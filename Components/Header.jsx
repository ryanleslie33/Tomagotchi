import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

let header = {
  backgroundColor:"blue"

}
let linkStyle = {
  backgroundColor:"black"
}

function Header(){


  return (
    <div>
    <AppBar style={header} position="static" color="default">

      <Toolbar>
        <Typography variant="h6" color="inherit">
          <Link to="/">Home</Link>
          <br/>

        </Typography>
      </Toolbar>
    </AppBar>

    </div>
  );
}

export default Header;
