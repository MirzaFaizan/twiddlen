import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Divider, Typography, Hidden } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Replay from '@material-ui/icons/Replay';

class ExpiredEvents extends React.Component {
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

        <Grid item xs={12} md={6}>
          <Grid
            container
            spacing={40}
            direction="column"
            justify="center"
            alignContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <IconButton>
                <Replay />
              </IconButton>
              <Typography variant="caption" align="center">
                Renew
              </Typography>
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

export default ExpiredEvents;
