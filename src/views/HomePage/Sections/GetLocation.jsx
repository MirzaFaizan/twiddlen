import React from 'react';
import {geolocated} from 'react-geolocated';
import GpsFixed from '@material-ui/icons/GpsFixed'

class Demo extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div>
      : !this.props.isGeolocationEnabled
        ? <GpsFixed/>
        : console.log(this.props.coords)
          ? null
          : <GpsFixed/>;
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
    watchPosition: true,
    suppressLocationOnMount: true
  },
  userDecisionTimeout: 5000,
})(Demo);