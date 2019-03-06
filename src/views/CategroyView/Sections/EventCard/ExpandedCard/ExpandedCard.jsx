import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
// import Divider from '@material-ui/core/Divider';
import { IconButton } from '@material-ui/core';

import Notification from '@material-ui/icons/Notifications';
import Bookmark from '@material-ui/icons/Bookmark';
import Share from '@material-ui/icons/Share';
import Comment from '@material-ui/icons/Comment';

import Chip from '@material-ui/core/Chip';

import {
  FloatingMenu,
  // MainButton,
  ChildButton
} from 'react-floating-button-menu';

import SignUpAlert from '../../../../SignUpFirstAlert/SignUpFirstAlert.jsx';
import Hidden from '@material-ui/core/Hidden';

const styles = {
  card: {
    maxWidth: 450,
    overflow: 'auto',
    height: 'auto'
  },
  media: {
    height: 220,
    width: '100%'
  }
};

class ResponsiveDialog extends React.Component {
  state = {
    open: this.props.open,
    isOpen: false,
    openAlert: false,
    notificationBgcolor: 'orange',
    notificationColor: 'white',
    bookmarkBgcolor: 'orange',
    bookmarkColor: 'white'
  };

  handleClickOpen = () => {
    this.props.openCard();
  };

  handleClose = () => {
    this.props.closeCard();
  };

  handleClickOpenAlert = () => {
    this.setState({
      openAlert: true
    });
  };

  handleCloseAlert = () => {
    this.setState({
      openAlert: false
    });
  };

  handleNotification = () => {
    if (this.props.client) {
      if (
        this.state.notificationBgcolor === 'orange' &&
        this.state.notificationColor === 'white'
      ) {
        this.setState({
          notificationBgcolor: 'white',
          notificationColor: 'orange'
        });
      } else {
        this.setState({
          notificationBgcolor: 'orange',
          notificationColor: 'white'
        });
      }

      console.log('Notifications On');
    } else {
      this.handleClickOpenAlert();
    }
  };
  handleFacebookShare = () => {
    if (this.props.client) {
      console.log('Facebook Share');
    } else {
      this.handleClickOpenAlert();
    }
  };
  handleTwitterShare = () => {
    if (this.props.client) {
      console.log('Twitter Share');
    } else {
      this.handleClickOpenAlert();
    }
  };

  handleBookmark = () => {
    if (this.props.client) {
      if (
        this.state.bookmarkBgcolor === 'orange' &&
        this.state.bookmarkColor === 'white'
      ) {
        this.setState({
          bookmarkBgcolor: 'white',
          bookmarkColor: 'orange'
        });
      } else {
        this.setState({
          bookmarkBgcolor: 'orange',
          bookmarkColor: 'white'
        });
      }
      console.log('Bookmark');
    } else {
      this.handleClickOpenAlert();
    }
  };

  handleComment = () => {
    if (this.props.client) {
      console.log('Comment');
    } else {
      this.handleClickOpenAlert();
    }
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        {/* <Button color="warning" onClick={this.handleClickOpen}>
          Category Name
        </Button> */}
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <Card className={classes.card}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  justify="center"
                  alignContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <Typography vairant="title" align="center">
                      Sponsored By
                    </Typography>
                  </Grid>
                  <Grid item xs={12} style={{ paddingBottom: '5%' }}>
                    <img
                      src={this.props.sponsor}
                      alt="sponsor"
                      width="125"
                      height="75"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <CardMedia
                  className={classes.media}
                  image={this.props.image}
                  title="The Great Event"
                />
                <Grid
                  container
                  spacing={0}
                  justify="flex-end"
                  alignContent="flex-end"
                  alignItems="flex-end"
                >
                  <Hidden only={['xs']}>
                    <Grid
                      item
                      xs={4}
                      sm={8}
                      md={8}
                      style={{ paddingLeft: '3%' }}
                    >
                      <Typography variant="title">{this.props.name}</Typography>
                    </Grid>
                  </Hidden>
                  <Grid item xs={7} sm={4} md={4}>
                    <div style={{ marginTop: '-10%' }}>
                      <Grid container spacing={0}>
                        <Grid item xs={3} md={3}>
                          <IconButton
                            style={{
                              backgroundColor: this.state.notificationBgcolor,
                              width: '30px',
                              height: '30px'
                            }}
                            onClick={() => this.handleNotification()}
                          >
                            <Hidden only={'xs'}>
                              <Notification
                                style={{
                                  color: this.state.notificationColor,
                                  width: '20px'
                                }}
                              />
                            </Hidden>
                            <Hidden smUp>
                              <Notification
                                style={{
                                  color: this.state.notificationColor,
                                  width: '20px',
                                  marginTop: '-10px'
                                }}
                              />
                            </Hidden>
                          </IconButton>
                          <Hidden only={'xs'}>
                            <small>Notify</small>
                          </Hidden>
                        </Grid>
                        <Grid item xs={3} md={3}>
                          <div
                            style={{
                              marginTop: '-36px'
                            }}
                          >
                            <FloatingMenu
                              slideSpeed={500}
                              direction="up"
                              spacing={8}
                              isOpen={this.state.isOpen}
                            >
                              <IconButton
                                style={{
                                  backgroundColor: 'orange',
                                  width: '30px',
                                  height: '30px'
                                }}
                                onClick={() =>
                                  this.setState({ isOpen: !this.state.isOpen })
                                }
                              >
                                <Hidden only={'xs'}>
                                  <Share
                                    style={{
                                      color: 'white',
                                      width: '20px'
                                      // height:'20px'
                                    }}
                                  />
                                </Hidden>
                                <Hidden smUp>
                                  <Share
                                    style={{
                                      color: 'white',
                                      width: '20px',
                                      // height:'20px',
                                      marginTop: '-10px'
                                    }}
                                  />
                                </Hidden>
                              </IconButton>
                              <ChildButton
                                icon={
                                  <i
                                    className={'fab fa-facebook'}
                                    style={{ color: 'white' }}
                                  />
                                }
                                size={10}
                                onClick={() => this.handleFacebookShare()}
                              />
                              <ChildButton
                                icon={
                                  <i
                                    className={'fab fa-twitter'}
                                    style={{ color: 'white' }}
                                  />
                                }
                                size={10}
                                onClick={() => this.handleTwitterShare()}
                              />
                            </FloatingMenu>
                            <Hidden only={'xs'}>
                              <small> Share</small>
                            </Hidden>
                          </div>
                        </Grid>
                        <Grid item xs={3} md={3}>
                          <IconButton
                            style={{
                              backgroundColor: this.state.bookmarkBgcolor,
                              width: '30px',
                              height: '30px'
                            }}
                            onClick={() => this.handleBookmark()}
                          >
                            <Hidden only={'xs'}>
                              <Bookmark
                                style={{
                                  color: this.state.bookmarkColor,
                                  width: '20px'
                                }}
                              />
                            </Hidden>
                            <Hidden smUp>
                              <Bookmark
                                style={{
                                  color: 'white',
                                  width: '20px',
                                  marginTop: '-10px'
                                }}
                              />
                            </Hidden>
                          </IconButton>
                          <Hidden only={'xs'}>
                            <small>Save</small>
                          </Hidden>
                        </Grid>
                        <Grid item xs={3} md={3}>
                          <IconButton
                            style={{
                              backgroundColor: 'orange',
                              width: '30px',
                              height: '30px'
                            }}
                            onClick={() => this.handleComment()}
                          >
                            <Hidden only={'xs'}>
                              <Comment
                                style={{
                                  color: 'white',
                                  width: '20px'
                                }}
                              />
                            </Hidden>
                            <Hidden smUp>
                              <Comment
                                style={{
                                  color: 'white',
                                  marginTop: '-10px',
                                  width: '20px'
                                }}
                              />
                            </Hidden>
                          </IconButton>
                          <Hidden only={'xs'}>
                            <small>Add</small>
                          </Hidden>
                        </Grid>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>

                <CardContent>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Grid container spacing={0} direction="row">
                        <Grid item xs={5} sm={7} md={7}>
                          <Typography variant="body1">
                            <strong>{this.props.organizerName}</strong>
                          </Typography>
                        </Grid>
                        <Grid item xs={7} sm={5} md={5}>
                          <Typography variant="body1">
                            <small>
                              {' '}
                              Avg. Ticket Price:&nbsp;
                              <strong>{this.props.price}</strong>
                            </small>
                          </Typography>
                        </Grid>
                        {/* <Grid item xs={2} sm={1} md={1}>
                          <Typography variant="body1">
                            <strong>{this.props.price}</strong>
                          </Typography>
                        </Grid> */}
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={8} direction="row">
                        <Grid item xs={4} sm={4} md={4}>
                          <Typography variant="subheading">
                            <small>
                              {' '}
                              <strong>{this.props.city}</strong>{' '}
                            </small>
                          </Typography>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                          <Typography variant="subheading">
                            <small>
                              <strong>
                                {this.props.seating}
                                Seatings
                              </strong>
                            </small>
                          </Typography>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                          <Typography variant="subheading" align="center">
                            <small>
                              <strong>2019-02-28</strong>
                            </small>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Hidden xsDown>
                    <Typography component="p">
                      {this.props.description}
                      {this.props.description}
                      {this.props.description}
                    </Typography>
                  </Hidden>
                  <Grid container spacing={16}>
                    <Grid item xs={4} md={6}>
                      <Chip
                        label={this.props.category[0]}
                        style={{
                          backgroundColor: 'orange',
                          color: 'white',
                          marginRight: 5
                        }}
                        onClick={() =>
                          this.props.history.push(
                            '/category-page/' + this.props.category[0]
                          )
                        }
                      />
                    </Grid>
                    {/* <Grid item xs={4} md={3}>
                      <Chip
                        label={this.props.category[1]}
                        style={{
                          backgroundColor: 'orange',
                          color: 'white',
                          marginRight: 5
                        }}
                      />
                    </Grid> */}
                    {/* <Grid item xs={4} md={3}>
                      <Typography variant="caption">
                        <small>more</small>
                      </Typography>
                    </Grid> */}
                  </Grid>
                  {/* <Divider /> */}
                </CardContent>
              </Grid>
            </Grid>
          </Card>
          <SignUpAlert
            open={this.state.openAlert}
            handleClickOpen={() => this.handleClickOpenAlert()}
            handleClose={() => this.handleCloseAlert()}
          />
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withStyles(styles)(withMobileDialog()(ResponsiveDialog));
