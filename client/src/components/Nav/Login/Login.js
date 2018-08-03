import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PasswordField from 'material-ui-password-field'

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
});

class Login extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                {/* <Typography gutterBottom>Click to get the full Modal experience!</Typography> */}
                <Button onClick={this.handleOpen}><i className="fas fa-cog"></i></Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="title" id="modal-title">
                            Admin Login:
            </Typography>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="email"
                            type="email"
                            fullWidth
                        >
                        </TextField>
                        <PasswordField
                            fullWidth
                            hintText="At least 8 characters"
                            floatingLabelText="Enter your password"
                            errorText="Your password is too short"
                        />
                <br/>
                <button type="submit" onClick={this.handleValidate}> Login</button>
                    </div>


                </Modal>

            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(Login);

export default SimpleModalWrapped