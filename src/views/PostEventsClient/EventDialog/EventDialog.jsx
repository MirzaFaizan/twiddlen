import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

import axios from 'axios';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Map from './Map';

import Geocode from 'react-geocode';
import { DropzoneArea } from 'material-ui-dropzone';
Geocode.setApiKey(
  process.env.REACT_APP_GOOGLEAPI || 'AIzaSyBbkFYYbFE0SFAZUlrFIdSMp9sezkg__X0'
);
Geocode.enableDebug();
class ResponsiveDialog extends React.Component {
  state = {
    open: false,
    title: '',
    category: 'Indoor',
    startDate: '',
    endDate: '',
    contact: '',
    description: '',
    Address: '',
    zip: '',
    spaces: '',
    latitude: 38.3667,
    longitude: -98.7714,
    cover: null,
    otherPictures: [],
    video: null,
    submit: true
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    });
  };
  handleeventCategoryChange = event => {
    this.setState({
      category: event.target.value
    });
  };
  handleStartDateChange = event => {
    this.setState({
      startDate: event.target.value
    });
  };

  handleEndDateChange = event => {
    this.setState({
      endDate: event.target.value
    });
  };
  handleContactChange = event => {
    this.setState({
      contact: event.target.value
    });
  };
  handledescriptionChange = event => {
    this.setState({
      description: event.target.value
    });
  };

  handleeventSpacesChange = event => {
    this.setState({
      spaces: event.target.value
    });
  };

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
  }

  onMarkerDragEnd = event => {
    console.log(process.env.REACT_APP_GOOGLEAPI);
    const newLat = event.latLng.lat(),
      newLng = event.latLng.lng();
    // const self= this;
    Geocode.fromLatLng(newLat, newLng).then(
      response => {
        console.log(response);
        const address = response.results[0].formatted_address;
        const address2 = response.results[0].address_components;
        const zipcode = address2[address2.length - 1].long_name;
        console.log(zipcode);
        this.setState({
          latitude: newLat,
          longitude: newLng,
          Address: address,
          zip: zipcode
        });
      },
      error => {
        console.error(error);
      }
    );
  };

  handleCoverChange(file) {
    this.setState({
      cover: file
    });
  }

  handleDelCoverChange() {
    this.setState({
      cover: null
    });
  }
  handlePicturesChange(file) {
    this.setState({
      otherPictures: [...this.state.otherPictures, file]
    });
  }

  handleDelPicturesChange(file) {
    var arr = this.state.otherPictures;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].name === file.name) {
        arr.splice(i, 1);
      }
    }
    this.setState({
      otherPictures: arr
    });
  }
  handleVideoChange(file) {
    this.setState({
      video: file
    });
  }

  handleDelVideoChange() {
    this.setState({
      video: null
    });
  }

  disablebutton = () => {
    if (
      this.state.title === '' ||
      this.state.startDate === '' ||
      this.state.endDate === '' ||
      this.state.description === '' ||
      this.state.Address === '' ||
      this.state.contact === '' ||
      this.state.spaces === '' ||
      this.state.cover === null ||
      !this.state.submit
    )
      return true;
    else return false;
  };
  submitClick = () => {
    this.setState({ submit: false });
    let formdata = new FormData();
    formdata.append('title', this.state.title);
    formdata.append('category', this.state.category);
    formdata.append('startDate', this.state.startDate);
    formdata.append('endDate', this.state.endDate);
    formdata.append('contact', this.state.contact);
    formdata.append('description', this.state.description);
    formdata.append('spaces', this.state.spaces);
    formdata.append('zip', this.state.zip);
    formdata.append('Address', this.state.Address);
    formdata.append('latitude', this.state.latitude);
    formdata.append('longitude', this.state.longitude);
    formdata.append('approval', 0);
    formdata.append('cover', this.state.cover);
    if (this.state.otherPictures.length > 0) {
      this.state.otherPictures.forEach((curr, index) => {
        formdata.append('image' + index, curr);
      });
    }
    if (this.state.video != null) {
      formdata.append('video', this.state.video);
    }
    console.log('we are still here');
    axios
      .post('https://twiddlen-api.herokuapp.com/user/postEvent', formdata, {
        headers: {
          //"Authorization" : `Bearer ${token}`
          'content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        JSON.stringify(res);
        //Check if response reture suceess: true or false
        if (res.data.success === false) {
          this.setState({ submit: true });
          alert(res.data.message);
        } else {
          this.setState({ open: false });
          alert('Event posted Successfully');
        }
      })
      .catch(error => {
        this.setState({ submit: true });
        alert('Internal Server error, Server Resopnded with "' + error + '"');
      });
  };
  render() {
    const { fullScreen } = this.props;
    const categories = [
      'Indoor',
      'Outdoor',
      'Family fun',
      'Shows',
      'Art',
      'Music',
      'Car',
      'Airplane',
      'Motorcycle',
      'Real Estate',
      'Garage Sales',
      'City Events',
      'Non-Profit',
      'Education/School',
      'Grade School',
      'Middle School',
      'High School',
      'Sports',
      'Biking',
      'Rowing',
      'Triathlons',
      'Marathons',
      'Hiking',
      'Bowling',
      'Pool',
      'Airsoft/Paintball',
      'Hockey',
      'Soccer',
      'Parks',
      'Water',
      'Recreation',
      'Amusement',
      'State',
      'Parks/Lakes',
      'Kids',
      'Library',
      'Meetup',
      'Low income/assistance',
      'Church',
      'Sales Events',
      'Mall Events',
      'Special Events',
      'Senior',
      'Music',
      'Movie',
      'Business Education',
      'Business',
      'Non-Profits',
      'Habitat for Humanity',
      'Street Fairs',
      'Facebook Events'
    ];
    // const { fullScreen } = this.props;

    return (
      <div>
        <Button
          onClick={this.handleClickOpen}
          style={{
            color: 'white',
            backgroundColor: 'orange',
            borderRadius: '20px',
            height: '50px'
          }}
        >
          Add New Event+
        </Button>
        <Dialog
          maxWidth={'md'}
          fullWidth={true}
          // fullScreen={true}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <Grid container spacing={0}>
            <Grid iitem xs={12} sm={12} md={12}>
              <Card>
                {/* <CardHeader color="primary">
                <h4>Post Events</h4>
              </CardHeader> */}
                <CardBody>
                  <Grid container spacing={16}>
                    <Grid item xs={12}>
                      <Divider />
                      <h4>Vibe Information</h4>
                      <Divider />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <TextField
                        id="outlined-title"
                        label="Title"
                        placeholder="Title"
                        margin="dense"
                        onChange={e => {
                          this.handleTitleChange(e);
                        }}
                        error={this.state.title === ''}
                        helperText={
                          this.state.title === '' ? 'Title is required' : ' '
                        }
                        variant="outlined"
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <TextField
                        required
                        id="category-select"
                        select
                        label="Category"
                        onChange={e => {
                          this.handleeventCategoryChange(e);
                        }}
                        SelectProps={{
                          native: true
                        }}
                        margin="dense"
                        variant="outlined"
                        fullWidth={true}
                      >
                        {categories.map(option => (
                          <option>{option}</option>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <TextField
                        id="sdate"
                        label="Start Date&Time"
                        type="datetime-local"
                        onChange={e => {
                          this.handleStartDateChange(e);
                        }}
                        InputLabelProps={{
                          shrink: true
                        }}
                        error={this.state.startDate === ''}
                        helperText={
                          this.state.startDate === '' ? 'Invalid Date/Time' : ''
                        }
                        variant="outlined"
                        margin="dense"
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <TextField
                        id="edate"
                        label="End Date&Time"
                        type="datetime-local"
                        onChange={e => {
                          this.handleEndDateChange(e);
                        }}
                        InputLabelProps={{
                          shrink: true
                        }}
                        error={this.state.endDate === ''}
                        helperText={
                          this.state.endDate === '' ? 'Invalid Date/Time' : ' '
                        }
                        variant="outlined"
                        margin="dense"
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <TextField
                        id="outlined-constact"
                        label="Contact"
                        placeholder="Contact"
                        margin="dense"
                        onChange={e => {
                          this.handleContactChange(e);
                        }}
                        error={this.state.contact === ''}
                        helperText={
                          this.state.contact === ''
                            ? 'Contact info is required'
                            : ' '
                        }
                        variant="outlined"
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <TextField
                        id="outlined-spaces"
                        label="Available Spaces"
                        placeholder="Available Spaces"
                        type="Number"
                        margin="dense"
                        onChange={e => {
                          this.handleeventSpacesChange(e);
                        }}
                        error={this.state.spaces === ''}
                        helperText={
                          this.state.spaces === ''
                            ? 'please specify total no of spaces'
                            : ' '
                        }
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
                        error={this.state.description === ''}
                        helperText={
                          this.state.description === ''
                            ? 'Please Describe your event'
                            : ' '
                        }
                        variant="outlined"
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                      <h4>Select Vibe's Location Adress on Map</h4>
                      <Divider />
                    </Grid>
                    <Grid item xs={12}>
                      <Map
                        google={this.props.google}
                        center={{
                          lat: this.state.latitude,
                          lng: this.state.longitude
                        }}
                        height="300px"
                        zoom={8}
                        dragged={this.onMarkerDragEnd}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                      <TextField
                        id="outlined-Address"
                        label="Address"
                        placeholder="Address"
                        margin="dense"
                        value={this.state.Address}
                        error={this.state.Address === ''}
                        helperText={
                          this.state.Address === ''
                            ? 'Address is required. Please Select location on map to fill this field'
                            : ' '
                        }
                        variant="outlined"
                        fullWidth={true}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Divider />
                      <h4>Vibe's Images/Media</h4>
                      <Divider />
                    </Grid>

                    <Grid item xs={12} sm={4} md={4}>
                      <DropzoneArea
                        acceptedFiles={['image/*']}
                        filesLimit={1}
                        dropzoneText="Select vibe's cover photo    (mandatory)"
                        showPreviews={false}
                        showAlerts={false}
                        onDrop={e => {
                          this.handleCoverChange(e);
                        }}
                        onDelete={e => {
                          this.handleDelCoverChange(e);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <DropzoneArea
                        acceptedFiles={['image/*']}
                        filesLimit={10}
                        dropzoneText="Select other photos      (optional)"
                        showPreviews={false}
                        showAlerts={false}
                        onDrop={e => {
                          this.handlePicturesChange(e);
                        }}
                        onDelete={e => {
                          this.handleDelPicturesChange(e);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                      <DropzoneArea
                        acceptedFiles={['video/mp4']}
                        filesLimit={1}
                        dropzoneText="Select  vibe's video(optional, max 50MB)"
                        showPreviews={false}
                        showAlerts={true}
                        maxFileSize={50000000}
                        onDrop={e => {
                          this.handleVideoChange(e);
                        }}
                        onDelete={e => {
                          this.handleDelVideoChange(e);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        disabled={this.disablebutton()}
                        variant="outlined"
                        size="large"
                        color="secondary"
                        type="image"
                        onClick={() => this.submitClick()}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </CardBody>
              </Card>
            </Grid>
          </Grid>
        </Dialog>
      </div>
    );
  }
}
ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};
export default withMobileDialog()(ResponsiveDialog);
