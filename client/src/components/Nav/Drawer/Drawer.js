import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import "./drawer.css"

// import FormDialog from "../Dialog/Dialog"

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class TemporaryDrawer extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <h2>Vicente Gonzalez</h2>
                <Divider/>
                <List>
                    <a href="https://github.com/vfgonzalez" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i>  Github</a>
                    <br/>
                    <a href="https://www.linkedin.com/in/vfgonzalez/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin"></i>    Linkedin</a>
                </List>
                <Divider />
                <List>
                    <a href="https://www.facebook.com/profile.php?id=100011258105181" target="_blank" rel="noopener noreferrer"> <i className="fab fa-facebook-square"></i>Facebook</a>
                    
                </List>
            </div>
        );


        return (
            <div>
                <Button onClick={this.toggleDrawer('left', true)}><MenuIcon/></Button>
                {/* <Button onClick={this.toggleDrawer('right', true)}>Open Right</Button>
        <Button onClick={this.toggleDrawer('top', true)}>Open Top</Button>
        <Button onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button> */}
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
                
            </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
