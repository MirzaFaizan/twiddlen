import React from 'react';
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker
} from 'react-google-maps';
// import Autocomplete from 'react-google-autocomplete';
import Geocode from 'react-geocode';

Geocode.setApiKey('AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0');
Geocode.enableDebug();
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng
      },
      markerPosition: {
        lat: this.props.center.lat,
        lng: this.props.center.lng
      }
    };
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    const AsyncMap = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          google={this.props.google}
          defaultZoom={this.props.zoom}
          defaultCenter={{
            lat: this.state.mapPosition.lat,
            lng: this.state.mapPosition.lng
          }}
        >
          {/*Marker*/}
          <Marker
            google={this.props.google}
            name={'Dolores park'}
            draggable={true}
            onDragEnd={this.props.dragged}
            position={{
              lat: this.state.markerPosition.lat,
              lng: this.state.markerPosition.lng
            }}
          />
          <Marker />
        </GoogleMap>
      ))
    );
    return (
      <AsyncMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?libraries=places&key=AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: this.props.height }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}
export default Map;
