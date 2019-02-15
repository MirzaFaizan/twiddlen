import React from 'react';
import Grid from '@material-ui/core/Grid';
import Replay from '@material-ui/icons/Replay';

class ExpiredEvents extends React.Component {
  render() {
    return (
      <Grid
        container
        spacing={40}
        style={{ paddingLeft: '15%', paddingRight: '15%' }}
      >
        <Grid item xs={6}>
          <Grid container spacing={0}>
            <img
              src="http://fis-cal.com/wp-content/uploads/2013/10/EVENTS.png"
              alt="eventimage"
              style={{ width: '150px', height: 'auto' }}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            spacing={4}
            justify="flex-end"
            alignContent="flex-end"
            alignItems="flex-end"
            style={{ paddingTop: '7%' }}
          >
            <Grid item xs={3}>
              <Replay />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default ExpiredEvents;
