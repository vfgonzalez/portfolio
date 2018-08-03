import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import FormDialog from "./Dialog/Dialog"
import Login from "./Login/Login"
import TemporaryDrawer from "./Drawer/Drawer"



const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  
};

function Nav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="dark"
       style={{ background: 'transparent', boxShadow: 'none', color: "dark"}}
       >
           
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            {/* <MenuIcon/> */}
            <TemporaryDrawer/>
            
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            
          </Typography>
          <FormDialog/>
          
          <Login/>


        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);
