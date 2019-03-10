import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
// import Hidden from '@material-ui/core/Hidden';

import LocationOn from '@material-ui/icons/LocationOn';
import Notification from '@material-ui/icons/Notifications';
import Favorite from '@material-ui/icons/Favorite';

import IconButton from '@material-ui/core/IconButton';

import ExpandedCard from './ExpandedCard/ExpandedCard.jsx';

import SignUpAlert from '../../../SignUpFirstAlert/SignUpFirstAlert.jsx';

const styles = {
  card: {
    maxWidth: 'auto',
    maxHeight: 'auto',
    minWidth: 'auto',
    minHeight: 300
  },
  cardContent: {
    // flex: '0 0 auto',
    maxHeight: 180
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  }
};

class ImgMediaCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      locationSub: 'grey',
      notificationSub: 'grey',
      heartSub: 'grey',
      openExpandedCardstate: false,
      openAlert: false
    };
  }

  openExpandedCard = () => {
    this.setState({
      openExpandedCardstate: true
    });
  };

  closeExpandedCard = () => {
    this.setState({
      openExpandedCardstate: false
    });
  };

  openSubscriptionAlert = () => {
    this.setState({
      subscriptionAlert: true
    });
  };

  closeSubscriptionAlert = () => {
    this.setState({
      subscriptionAlert: false
    });
  };

  locationSub = () => {
    if (this.props.client) {
      if (this.state.locationSub === 'grey') {
        this.setState({
          locationSub: 'orange',
          subscriptionMessage: 'Location Added!'
        });
      } else {
        this.setState({
          locationSub: 'grey',
          subscriptionMessage: 'Location Removed!'
        });
      }
      this.openSubscriptionAlert();
    } else {
      this.handleClickOpen();
    }
  };

  notificationSub = () => {
    if (this.props.client) {
      if (this.state.notificationSub === 'grey') {
        this.setState({
          notificationSub: 'orange',
          subscriptionMessage: 'You Subscribed!'
        });
      } else {
        this.setState({
          notificationSub: 'grey',
          subscriptionMessage: 'UnSubscribed!'
        });
      }
      this.openSubscriptionAlert();
    } else {
      this.handleClickOpen();
    }
  };

  heartSub = () => {
    if (this.props.client) {
      if (this.state.heartSub === 'grey') {
        this.setState({
          heartSub: 'orange',
          subscriptionMessage: 'Favorite Added!'
        });
      } else {
        this.setState({
          heartSub: 'grey',
          subscriptionMessage: 'Favorite Removed!'
        });
      }
      this.openSubscriptionAlert();
    } else {
      this.handleClickOpen();
    }
  };

  handleClickOpen = () => {
    this.setState({
      openAlert: true
    });
  };

  handleClose = () => {
    this.setState({
      openAlert: false
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea onClick={() => this.openExpandedCard()}>
          <CardMedia
            component="img"
            alt={this.props.name}
            className={classes.media}
            height="200"
            image={this.props.image}
            title={this.props.name}
          />
        </CardActionArea>
        <CardContent className={classes.cardContent}>
          <div>
            <Grid container spacing={8} justify="space-evenly">
              <Grid item xs={3} sm={3} md={4}>
                <Typography
                  variant="caption"
                  component="h2"
                  color="textPrimary"
                >
                  <strong>{this.props.name}</strong>
                </Typography>
              </Grid>
              <Grid item xs={3} sm={3} md={3}>
                <Typography
                  variant="caption"
                  component="h2"
                  color="textPrimary"
                >
                  <strong>{this.props.city}</strong>
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={5}>
                <div style={{ marginTop: '-10%' }}>
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-start"
                    spacing={0}
                  >
                    <Grid item xs={4}>
                      <IconButton
                        //color={this.state.locationSub}
                        disableRipple={true}
                        onClick={() => this.locationSub()}
                        style={{ color: this.state.locationSub }}
                      >
                        <LocationOn />
                      </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                      <IconButton
                        //color={this.state.notificationSub}
                        onClick={() => this.notificationSub()}
                        style={{ color: this.state.notificationSub }}
                      >
                        <Notification />
                      </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                      <IconButton
                        //color={this.state.heartSub}
                        onClick={() => this.heartSub()}
                        style={{ color: this.state.heartSub }}
                      >
                        <Favorite />
                      </IconButton>
                    </Grid>
                  </Grid>
                </div>
              </Grid>

              <Grid item xs={5} sm={6} md={4}>
                <div style={{ marginTop: '-10%' }}>
                  <Typography
                    variant="subheading"
                    component="h5"
                    color="textPrimary"
                  >
                    <b>Organizer</b>
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={7} sm={6} md={8}>
                <div style={{ marginTop: '-6.5%' }}>
                  <Typography
                    variant="subheading"
                    component="h5"
                    color="textPrimary"
                  >
                    <small>{this.props.organizerName}</small>
                  </Typography>
                </div>
              </Grid>

              <Grid item xs={5} sm={6} md={4}>
                <div style={{ marginTop: '-10%' }}>
                  <Typography
                    variant="body2"
                    component="h5"
                    color="textPrimary"
                  >
                    <b>Time&Date</b>
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={7} sm={6} md={8}>
                <div style={{ marginTop: '-5%' }}>
                  <Typography
                    variant="subheading"
                    component="h5"
                    color="textPrimary"
                  >
                    <small>{this.props.timeAndDate}</small>
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>
                  <ExpandedCard
                    open={this.state.openExpandedCardstate}
                    openCard={() => this.openExpandedCard()}
                    closeCard={() => this.closeExpandedCard()}
                    image={this.props.image}
                    name={this.props.name}
                    city={this.props.city}
                    organizerName={this.props.organizerName}
                    timeAndDate={this.props.timeAndDate}
                    description={this.props.description}
                    seating="300"
                    price="$700"
                    category={[this.props.category]}
                    sponsor={this.props.sponsor}
                    history={this.props.history}
                    client={this.props.client}
                  />
                </div>
              </Grid>

              {/* <Hidden xsDown>
            <Grid item xs={12}>
            <div style={{marginTop:'-3%'}}>
            <Typography variant="body2" component="h5" color='textPrimary'>
             <b>Description</b>
            </Typography>
            </div>
            </Grid>
            <Grid item xs={12}>
            <div style={{marginTop:'-2%'}}>
            <Typography variant="caption" component="p" color="textPrimary">
            {this.props.description}
            </Typography>
            </div>
            </Grid>
            </Hidden> */}
            </Grid>
          </div>
        </CardContent>
        <SignUpAlert
          open={this.state.openAlert}
          handleClickOpen={() => this.handleClickOpen()}
          handleClose={() => this.handleClose()}
        />
      </Card>
    );
  }
}
ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
