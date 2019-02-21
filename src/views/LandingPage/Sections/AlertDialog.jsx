import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import GpsFixed from '@material-ui/icons/GpsFixed';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Geolocation from 'react-geolocation';
import axios from 'axios';

const styles = {
  root: {
    padding: '0px 0px 1px 0px',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    borderRadius: '25px'
  },
  input: {
    marginLeft: 20,
    flex: 1
  },
  iconButton2: {
    padding: 12,
    backgroundColor: 'orange',
    fontSize: '1rem'
  },
  iconButton: {
    padding: 10,
    fontSize: '1rem',
    color: 'orange'
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};

class ResponsiveDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  fetchZip = (lat, long) => {
    var temp = lat + ',' + long;
    let data = {
      zipcode: temp
    };
    axios
      .post(
        'https://twiddlen-api.herokuapp.com/user/zipAddress',
        data
        //, { headers: {"Authorization" : `Bearer ${token}`} }
      )
      .then(res => {
        JSON.stringify(res);
        //Check if response reture suceess: true or false
        console.log(res.data);
        if (res.data.success === false) {
          alert(res.data.message);
        } else {
          // this.props.history.push('/home-page');
          console.log(res.data.location);
          alert(res.data.message);
        }
      })
      .catch(error => {
        alert('Internal Server error, Server Resopnded with "' + error + '"');
      });
  };

  render() {
    // const { fullScreen } = this.props;
    const { classes } = this.props;

    return (
      <div>
        <Geolocation
          lazy
          render={({
            getCurrentPosition,
            fetchingPosition,
            position: { coords: { latitude, longitude } = {} } = {}
          }) => (
            <div>
              <IconButton
                className={classes.iconButton}
                aria-label="Directions"
                onClick={getCurrentPosition}
              >
                <GpsFixed />
                {fetchingPosition === false ? (
                  <Hidden xlDown>{this.fetchZip(latitude, longitude)}</Hidden>
                ) : (
                  <Hidden xlDown>abc</Hidden>
                )}
              </IconButton>
            </div>
          )}
        />
        {/* <Dialog
          fullScreen={fullScreen}
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              You sure want to give access to your location?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              Disagree
            </Button>
            <Button
              onClick={this.props.getLocationfromIP}
              color="primary"
              autoFocus
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog> */}
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withMobileDialog()(ResponsiveDialog));
