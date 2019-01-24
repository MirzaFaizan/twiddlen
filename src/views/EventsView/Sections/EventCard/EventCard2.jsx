import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
// import Hidden from '@material-ui/core/Hidden';

import LocationOn from '@material-ui/icons/LocationOn';
import Notification from '@material-ui/icons/NotificationsNone';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

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
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt={this.props.name}
          className={classes.media}
          height="200"
          image={this.props.image}
          title={this.props.name}
        />
        <CardContent className={classes.cardContent}>
          <div>
            <Grid container spacing={8} justify="space-evenly">
              <Grid item xs={4} sm={3} md={4}>
                <Typography
                  variant="caption"
                  component="h2"
                  color="textPrimary"
                >
                  {this.props.name}
                </Typography>
              </Grid>
              <Grid item xs={4} sm={3} md={3}>
                <Typography
                  variant="caption"
                  component="h2"
                  color="textPrimary"
                >
                  {this.props.city}
                </Typography>
              </Grid>
              <Grid item xs={4} sm={6} md={4}>
                <Typography variant="body2" component="h6" color="textPrimary">
                  <LocationOn />
                  <Notification />
                  <FavoriteBorder />
                </Typography>
              </Grid>

              <Grid item xs={5} sm={5} md={4}>
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
              <Grid item xs={7} sm={7} md={8}>
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

              <Grid item xs={5} sm={5} md={4}>
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
              <Grid item xs={7} sm={7} md={8}>
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
      </Card>
    );
  }
}
ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
