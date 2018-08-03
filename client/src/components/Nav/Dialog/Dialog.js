import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button className="contact-button" onClick={this.handleClickOpen}>Contact Me</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Contact</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please provide your contact information, and I will respond shortly. 
              <br/>
              Thank You.
            </DialogContentText>
           
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="Name"
              fullWidth
            />
             <TextField
            //   autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
            />
             <TextField
              
              margin="dense"
              id="number"
              label="Phone Number"
              type="Number"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="danger">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="dark">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}