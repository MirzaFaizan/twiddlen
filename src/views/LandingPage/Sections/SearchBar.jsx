import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import GpsFixed from '@material-ui/icons/GpsFixed';
import Geolocation from 'react-geolocation';
// import Hidden from '@material-ui/core/Hidden';
import axios from 'axios';
// import AlertDialog from './AlertDialog.jsx';

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

class CustomizedInputBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      open: false,
      locationGot: false
    };
  }

  searchValueChange = e => {
    this.setState({
      searchValue: e.target.value
    });
    // const a = this.state.searchValue.toString();
    // console.log(a.search('64555'));
  };
  locationGotfunc = () => {
    this.setState({
      locationGot: true
    });
  };
  // getLocationfromIP = () => {
  //   axios
  //     .get(
  //       'http://ip-api.com/json'
  //       //, { headers: {"Authorization" : `Bearer ${token}`} }
  //     )
  //     .then(res => {
  //       JSON.stringify(res);
  //       //Check if response reture suceess: true or false
  //       console.log(res);
  //       //   if (res.data.success === false) {
  //       //     alert(res.data.message);
  //       //   } else {
  //       //     // this.props.history.push('/home-page');
  //       //     console.log(res.data.location);
  //       //     alert(res.data.message);
  //       //   }
  //       // })
  //       // .catch(error => {
  //       //   alert('Internal Server error, Server Resopnded with "' + error + '"');
  //     });
  //   this.handleClose();
  // };
  gotoHome = () => {
    let data = {
      zipcode: this.state.searchValue
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
          this.props.history.push('/home-page');
          console.log(res.data.location);
          alert(res.data.message);
        }
      })
      .catch(error => {
        alert('Internal Server error, Server Resopnded with "' + error + '"');
      });
  };

  // getPositionagain = (latitude, longitude) => {
  //   if (latitude !== undefined && longitude !== undefined) {
  //     var temp = latitude + ',' + longitude;
  //     let data = {
  //       zipcode: temp
  //     };
  //     axios
  //       .post(
  //         'https://twiddlen-api.herokuapp.com/user/zipAddress',
  //         data
  //         //, { headers: {"Authorization" : `Bearer ${token}`} }
  //       )
  //       .then(res => {
  //         JSON.stringify(res);
  //         //Check if response reture suceess: true or false
  //         console.log(res.data);
  //         if (res.data.success === false) {
  //           alert(res.data.message);
  //         } else {
  //           this.props.history.push('/home-page');
  //           console.log(res.data.location);
  //           alert(res.data.message);
  //           // this.props.locationGotFunc();
  //         }
  //       })
  //       .catch(error => {
  //         alert('Internal Server error, Server Resopnded with "' + error + '"');
  //       });
  //   }
  // };

  getPosition = (getCurrentPosition, latitude, longitude) => {
    getCurrentPosition();
    // if (latitude !== undefined && longitude !== undefined)
    //  {
    var temp = latitude + ',' + longitude;
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
          this.props.history.push('/home-page');
          console.log(res.data.location);
          alert(res.data.message);
          // this.props.locationGotFunc();
        }
      })
      .catch(error => {
        alert('Internal Server error, Server Resopnded with "' + error + '"');
      });
    // }
    // this.getPositionagain(latitude, longitude);
    // console.log(latitude,longitude)
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={1}>
        <InputBase
          className={classes.input}
          placeholder="ZIP / LOCATION ADDRESS "
          onChange={e => this.searchValueChange(e)}
        />
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
                onClick={() =>
                  this.getPosition(getCurrentPosition, latitude, longitude)
                }
              >
                <GpsFixed />
              </IconButton>
            </div>
          )}
        />
        {/* <div>
          <AlertDialog
            open={this.state.open}
            locationGot={this.state.locationGot}
            locationGotFunc={this.locationGotfunc}
            history={this.props.history}
            // handleClickOpen={() => this.handleClickOpen()}
            // handleClose={() => this.handleClose()}
            // getLocationfromIP={() => this.getLocationfromIP()}
          />
        </div> */}
        <IconButton
          className={classes.iconButton2}
          aria-label="Search"
          onClick={() => this.gotoHome()}
        >
          {' '}
          GO
        </IconButton>
      </Paper>
    );
  }
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputBase);
