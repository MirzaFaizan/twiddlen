import React from 'react';
import PropTypes from 'prop-types';
// import Button from 'components/CustomButtons/Button.jsx';
import Dialog from '@material-ui/core/Dialog';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
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

import Hidden from '@material-ui/core/Hidden';

const styles = {
  card: {
    maxWidth: 430,
    overflow: 'auto',
    height: 'auto'
  },
  media: {
    height: 250,
    width: '100%'
  }
};

class ResponsiveDialog extends React.Component {
  state = {
    open: this.props.open,
    isOpen: false
  };

  handleClickOpen = () => {
    this.props.openCard();
  };

  handleClose = () => {
    this.props.closeCard();
  };

  render() {
    // const { fullScreen } = this.props;
    const { classes } = this.props;

    return (
      <div>
        {/* <Button color="warning" onClick={this.handleClickOpen}>
          Category Name
        </Button> */}
        <Dialog
          // fullScreen={fullScreen}
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
                  <Grid item xs={12}>
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
                <div style={{ marginTop: '-17%', marginRight: '1%' }}>
                  <Grid
                    container
                    spacing={0}
                    justify="flex-end"
                    alignContent="flex-end"
                    alignItems="flex-end"
                  >
                    <Hidden smDown>
                      <Grid item xs={4} md={7}>
                        <Typography variant="title">
                          {this.props.name}
                        </Typography>
                      </Grid>
                    </Hidden>
                    <Grid item xs={2} md={1}>
                      <IconButton
                        style={{
                          backgroundColor: 'orange',
                          width: '30px',
                          height: '30px'
                        }}
                      >
                        <Notification
                          style={{ color: 'white', fontSize: '20px' }}
                        />
                      </IconButton>
                      <small>Notify</small>
                    </Grid>
                    <Grid item xs={2} md={1}>
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
                          <small>
                            <Share style={{ color: 'white' }} />
                          </small>
                        </IconButton>
                        <ChildButton
                          icon={
                            <i
                              className={'fab fa-facebook'}
                              style={{ color: 'white' }}
                            />
                          }
                          size={20}
                          onClick={() => console.log('First button clicked')}
                        />
                        <ChildButton
                          icon={
                            <i
                              className={'fab fa-twitter'}
                              style={{ color: 'white' }}
                            />
                          }
                          size={20}
                        />
                      </FloatingMenu>
                      <small> Share</small>
                    </Grid>
                    <Grid item xs={2} md={1}>
                      <IconButton
                        style={{
                          backgroundColor: 'orange',
                          width: '30px',
                          height: '30px'
                        }}
                      >
                        <small>
                          <Bookmark
                            style={{ color: 'white', fontSize: '20px' }}
                          />
                        </small>
                      </IconButton>
                      <small>Save</small>
                    </Grid>
                    <Grid item xs={2} md={1}>
                      <IconButton
                        style={{
                          backgroundColor: 'orange',
                          width: '30px',
                          height: '30px'
                        }}
                      >
                        <small>
                          <Comment
                            style={{ color: 'white', fontSize: '18px' }}
                          />
                        </small>
                      </IconButton>
                      <small>Add</small>
                    </Grid>
                  </Grid>
                </div>

                <CardContent>
                  <Grid container spacing={0}>
                    <Grid item xs={12}>
                      <Grid container spacing={0} direction="row">
                        <Grid item xs={7}>
                          <Typography variant="body1">
                            {this.props.organizerName}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body1">
                            Avg. Ticket Price
                          </Typography>
                        </Grid>
                        <Grid item xs={1}>
                          <Typography variant="body1">
                            <strong>{this.props.price}</strong>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={8} direction="row">
                        <Grid item xs={3}>
                          <Typography variant="body2">
                            {this.props.city}
                          </Typography>
                        </Grid>
                        <Grid item xs={4}>
                          <Typography variant="body2">
                            {this.props.seating}
                            Seatings
                          </Typography>
                        </Grid>
                        <Grid item xs={5}>
                          <Typography variant="body2">
                            <small>{this.props.timeAndDate}</small>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Hidden xsDown>
                    <Typography component="p">
                      {this.props.description}
                    </Typography>
                  </Hidden>
                  <Grid container spacing={16}>
                    <Grid item xs={4} md={3}>
                      <Chip
                        label={this.props.category[0]}
                        style={{
                          backgroundColor: 'orange',
                          color: 'white',
                          marginRight: 5
                        }}
                      />
                    </Grid>
                    <Grid item xs={4} md={3}>
                      <Chip
                        label={this.props.category[1]}
                        style={{
                          backgroundColor: 'orange',
                          color: 'white',
                          marginRight: 5
                        }}
                      />
                    </Grid>
                    <Grid item xs={4} md={3}>
                      <Typography variant="caption">
                        <small>more</small>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withStyles(styles)(withMobileDialog()(ResponsiveDialog));
