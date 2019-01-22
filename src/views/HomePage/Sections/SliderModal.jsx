import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import SwapVert from '@material-ui/icons/SwapVert';
import Slider from './Slider.jsx';
import Grid from '@material-ui/core/Grid';
import SliderModalMenu from './SliderModalMenu.jsx'

import Divider from '@material-ui/core/Divider'

import Hidden from '@material-ui/core/Hidden'

class ResponsiveDialog extends React.Component {

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
    // const { fullScreen } = this.props;

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          <SwapVert/>
        </Button>
        <Dialog
          maxWidth={'sm'}
          fullWidth={true}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title">
          <DialogContent>
            <Grid container spacing={16}>
            <Grid item xs={12} sm={12} md={6}>
              <SliderModalMenu/>
            </Grid>
            <Hidden smUp>
            <Grid item xs={12}>
            <Divider/>
            </Grid>
            </Hidden>
            <Grid item xs={12} sm={12} md={6}>
            <DialogContentText>
              Choose your Radius
             <div><Slider/></div> 
            </DialogContentText>
            </Grid>
            </Grid>
          </DialogContent>
          {/* <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);