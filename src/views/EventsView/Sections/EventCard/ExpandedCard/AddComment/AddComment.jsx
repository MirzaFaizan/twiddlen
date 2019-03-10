import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Comment from '@material-ui/icons/Comment';
import { IconButton } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
export default class FormDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleComment = () => {
    if (this.props.client) {
      this.handleClickOpen();
    } else {
      this.props.handleClickOpenAlert();
    }
  };

  render() {
    return (
      <div>
        <IconButton
          style={{
            backgroundColor: 'orange',
            width: '30px',
            height: '30px'
          }}
          onClick={() => this.handleComment()}
        >
          <Hidden only={'xs'}>
            <Comment
              style={{
                color: 'white',
                width: '20px'
              }}
            />
          </Hidden>
          <Hidden smUp>
            <Comment
              style={{
                color: 'white',
                marginTop: '-10px',
                width: '20px'
              }}
            />
          </Hidden>
        </IconButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a Comment</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Comment"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
