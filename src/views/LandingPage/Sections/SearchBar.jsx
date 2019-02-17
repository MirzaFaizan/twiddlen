import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import GpsFixed from '@material-ui/icons/GpsFixed';
import Geolocation from 'react-geolocation';
import Hidden from '@material-ui/core/Hidden';

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

var LATITUDE = 0;
var LONGITUDE = 0;

class CustomizedInputBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ''
    };
  }

  searchValueChange = e => {
    this.setState({
      searchValue: e.target.value
    });
    console.log(this.state.searchValue);
  };

  gotoHome = () => {
    this.props.history.push('/home-page');
    console.log(LATITUDE + LONGITUDE);
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={1}>
        <InputBase
          className={classes.input}
          placeholder="ZIP / LOCATION"
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
                onClick={getCurrentPosition}
              >
                <GpsFixed />
                <Hidden xlDown>
                  {(LATITUDE = latitude)}
                  {(LONGITUDE = longitude)}
                </Hidden>
              </IconButton>
            </div>
          )}
        />
        <IconButton
          className={classes.iconButton2}
          aria-label="Search"
          onClick={() => this.gotoHome()}
        >
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
