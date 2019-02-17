import React from 'react';
import Grid from '@material-ui/core/Grid';
import AddCircle from '@material-ui/icons/AddCircle';
import { Divider, Typography, Hidden } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

import Notifications from '@material-ui/icons/Notifications';
import Share from '@material-ui/icons/Share';
import Comment from '@material-ui/icons/Comment';

class UpcomingEvents extends React.Component {
  render() {
    return (
      <Grid
        container
        spacing={0}
        style={{ paddingLeft: '15%', paddingRight: '15%' }}
      >
        <Grid item xs={12} md={6}>
          <Grid
            container
            spacing={0}
            justify="flex-start"
            alignContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={6}>
              <img
                src="http://fis-cal.com/wp-content/uploads/2013/10/EVENTS.png"
                alt="eventimage"
                style={{ width: '150px', height: 'auto' }}
              />
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} md={6} style={{ paddingTop: '7%' }}>
                <Typography align="center">A day at the Beach!</Typography>
              </Grid>
            </Hidden>

            <Hidden mdUp>
              <Grid item xs={12} md={6}>
                <Typography align="center">A day at the Beach!</Typography>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>

        <Grid item xs={12} md={4}>
          <Grid
            container
            spacing={16}
            justify="flex-start"
            alignContent="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={3} md={3}>
              <Grid container spacing={0} direction="column">
                <Grid item xs={12}>
                  <IconButton>
                    <AddCircle />
                  </IconButton>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption" align="center">
                    Add
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} md={3}>
              <Grid container spacing={0} direction="column">
                <Grid item xs={12}>
                  <IconButton>
                    <Notifications />
                  </IconButton>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption" align="center">
                    Notify
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} md={3}>
              <Grid container spacing={0} direction="column">
                <Grid item xs={12}>
                  <IconButton>
                    <Share />
                  </IconButton>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption" align="center">
                    Share
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} md={3}>
              <Grid container spacing={0} direction="column">
                <Grid item xs={12}>
                  <IconButton>
                    <Comment />
                  </IconButton>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="caption" align="center">
                    Comment
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
      </Grid>
    );
  }
}

export default UpcomingEvents;
