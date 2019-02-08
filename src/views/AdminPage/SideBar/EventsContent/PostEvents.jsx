import React from 'react';
// import Table from "components/Table/Table.jsx";
import Grid from '@material-ui/core/Grid';

import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';

import TextField from '@material-ui/core/TextField';
// import Button from 'components/CustomButtons/Button.jsx';
// import Add from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';
// import {DropzoneArea} from 'material-ui-dropzone'
import ImageUploader from 'react-images-upload';
import axios from 'axios';

export default class ApprovedEvents extends React.Component {
  state = {
    name: '',
    startDate: '',
    endDate: '',
    eventType: '',
    description: '',
    locationType: '',
    locationName: '',
    postalAddress: '',
    streetAddress: '',
    cityName: '',
    postalCode: '',
    stateName: '',
    countryName: '',
    locationAddress: '',
    latitude: '',
    longitude: '',
    pictures: []
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handlestartDateChange = event => {
    this.setState({
      startDate: event.target.value
    });
  };

  handleendDateChange = event => {
    this.setState({
      endDate: event.target.value
    });
  };

  handleeventTypeChange = event => {
    this.setState({
      eventType: event.target.value
    });
  };

  handledescriptionChange = event => {
    this.setState({
      description: event.target.value
    });
  };

  handleeventlocationTypeChange = event => {
    this.setState({
      locationType: event.target.value
    });
  };

  handleeventlocationNameChange = event => {
    this.setState({
      locationName: event.target.value
    });
  };

  handleeventpostalAddressChange = event => {
    this.setState({
      postalAddress: event.target.value
    });
  };

  handleeventstreetAddressChange = event => {
    this.setState({
      streetAddress: event.target.value
    });
  };

  handleeventcityNameChange = event => {
    this.setState({
      cityName: event.target.value
    });
  };

  handleeventpostalCodeChange = event => {
    this.setState({
      postalCode: event.target.value
    });
  };

  handleeventstateNameChange = event => {
    this.setState({
      stateName: event.target.value
    });
  };

  handleevnetcountryNameChange = event => {
    this.setState({
      countryName: event.target.value
    });
  };

  handleeventlocationAddressChange = event => {
    this.setState({
      locationAddress: event.target.value
    });
  };

  handleLatitudeChange = event => {
    this.setState({
      latitude: event.target.value
    });
  };

  handleLongitudeChange = event => {
    this.setState({
      longitude: event.target.value
    });
  };

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
  }
  submitClick = () => {
    let formdata = new FormData();
    formdata.append('name', this.state.name);
    formdata.append('startDate', this.state.startDate);
    formdata.append('endDate', this.state.endDate);
    formdata.append('eventType', this.state.eventType);
    formdata.append('description', this.state.description);
    formdata.append('locationType', this.state.locationType);
    formdata.append('locationName', this.state.locationName);
    formdata.append('postalAddress', this.state.postalAddress);
    formdata.append('streetAddress', this.state.streetAddress);
    formdata.append('cityName', this.state.cityName);
    formdata.append('postalCode', this.state.postalCode);
    formdata.append('stateName', this.state.stateName);
    formdata.append('countryName', this.state.countryName);
    formdata.append('locationAddress', this.state.locationAddress);
    formdata.append('latitude', this.state.latitude);
    formdata.append('longitude', this.state.longitude);
    formdata.append('approval', 1);
    formdata.append('authorType', 'admin');
    formdata.append('organizer', 'Twiddlen');

    this.state.pictures.forEach((curr, index) => {
      formdata.append('image' + index, curr);
    });

    axios
      .post('https://twiddlen-api.herokuapp.com/admin/postEvent', formdata, {
        headers: {
          //"Authorization" : `Bearer ${token}`
          'content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        JSON.stringify(res);
        //Check if response reture suceess: true or false
        if (res.data.success === false) {
          alert(res.data.message);
        } else {
          alert('Event posted Successfully');
        }
      })
      .catch(error => {
        alert('Internal Server error, Server Resopnded with "' + error + '"');
      });
  };

  render() {
    return (
      <div>
        <Grid container spacing={0}>
          <Grid iitem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4>Post Events</h4>
              </CardHeader>
              <CardBody>
                <Grid container spacing={16}>
                  <Grid item xs={12}>
                    <Divider />
                    <h4>Event Information</h4>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3}>
                    <TextField
                      id="outlined-name"
                      label="Name"
                      placeholder="Name"
                      margin="dense"
                      onChange={e => {
                        this.handleNameChange(e);
                      }}
                      variant="outlined"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3}>
                    <form noValidate>
                      <TextField
                        id="date"
                        label="Start Date"
                        type="date"
                        defaultValue={new Date()}
                        onChange={e => {
                          this.handlestartDateChange(e);
                        }}
                        InputLabelProps={{
                          shrink: true
                        }}
                        variant="outlined"
                        margin="dense"
                        fullWidth={true}
                      />
                    </form>
                  </Grid>
                  <Grid item xs={12} sm={12} md={3}>
                    <form noValidate>
                      <TextField
                        id="date"
                        label="End Date"
                        type="date"
                        defaultValue={new Date()}
                        onChange={e => {
                          this.handleendDateChange(e);
                        }}
                        InputLabelProps={{
                          shrink: true
                        }}
                        variant="outlined"
                        margin="dense"
                        fullWidth={true}
                      />
                    </form>
                  </Grid>
                  <Grid item xs={12} sm={12} md={3}>
                    <TextField
                      id="outlined-eventType"
                      label="Event Type"
                      placeholder="Event Type"
                      margin="dense"
                      onChange={e => {
                        this.handleeventTypeChange(e);
                      }}
                      variant="outlined"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      id="outlined-description"
                      label="Description"
                      placeholder="Description"
                      margin="dense"
                      onChange={e => {
                        this.handledescriptionChange(e);
                      }}
                      variant="outlined"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                    <h4>Event Address Information</h4>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      id="outlined-eventLocationType"
                      label="Location Type"
                      placeholder="Location Type"
                      margin="dense"
                      onChange={e => {
                        this.handleeventlocationTypeChange(e);
                      }}
                      variant="outlined"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      id="outlined-postalAddress"
                      label="Postal Address"
                      placeholder="Postal Address"
                      margin="dense"
                      onChange={e => {
                        this.handleeventpostalAddressChange(e);
                      }}
                      variant="outlined"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      id="outlined-streetAddress"
                      label="Street Address"
                      placeholder="Street Address"
                      margin="dense"
                      onChange={e => {
                        this.handleeventstreetAddressChange(e);
                      }}
                      variant="outlined"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3}>
                    <TextField
                      id="outlined-cityName"
                      label="Event's City"
                      placeholder="Event's City"
                      margin="dense"
                      onChange={e => {
                        this.handleeventcityNameChange(e);
                      }}
                      variant="outlined"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3}>
                    <TextField
                      id="outlined-postalCode"
                      label="Postal Code"
                      placeholder="Postal Code"
                      margin="dense"
                      onChange={e => {
                        this.handleeventpostalCodeChange(e);
                      }}
                      variant="outlined"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3}>
                    <TextField
                      id="outlined-State"
                      label="Event State"
                      placeholder="Event State"
                      margin="dense"
                      onChange={e => {
                        this.handleeventstateNameChange(e);
                      }}
                      variant="outlined"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={3}>
                    <TextField
                      id="outlined-country"
                      label="Event Country"
                      placeholder="Event Country"
                      margin="dense"
                      onChange={e => {
                        this.handleevnetcountryNameChange(e);
                      }}
                      variant="outlined"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12}>
                    <TextField
                      id="outlined-eventLocationAddress"
                      label="Location Address"
                      placeholder="Location Address"
                      margin="dense"
                      onChange={e => {
                        this.handleeventlocationAddressChange(e);
                      }}
                      variant="outlined"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                    <h4>Latitude, Longitude</h4>
                    <Divider />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      id="outlined-Latitude"
                      label="Latitude"
                      placeholder="Latitude"
                      margin="dense"
                      onChange={e => {
                        this.handleLatitudeChange(e);
                      }}
                      variant="outlined"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      id="outlined-Longitude"
                      label="Longitude"
                      placeholder="Longitude"
                      margin="dense"
                      onChange={e => {
                        this.handleLongitudeChange(e);
                      }}
                      variant="outlined"
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                    <h4>Event Images</h4>
                    <Divider />
                  </Grid>
                  {/* <Button variant="outlined" size="large" color="secondary" type="image">Upload Image</Button> */}
                  <ImageUploader
                    withIcon={true}
                    buttonText="Choose images"
                    onChange={e => {
                      this.onDrop(e);
                    }}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                  />
                  {/* <DropzoneArea 
                                onChange={this.handleChange.bind(this)}
                                showPreviews={true}
                                showAlerts
                                /> */}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="outlined"
                    size="large"
                    color="secondary"
                    type="image"
                    onClick={() => this.submitClick()}
                  >
                    Submit
                  </Button>
                </Grid>
              </CardBody>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
