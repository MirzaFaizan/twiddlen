import React from 'react';
import Grid from '@material-ui/core/Grid';
import AddCircle from '@material-ui/icons/AddCircle';

class UpcomingEvents extends React.Component {
  render() {
    return (
      <Grid
        container
        spacing={40}
        style={{ paddingLeft: '15%', paddingRight: '15%' }}
      >
        <Grid item xs={6}>
          <Grid
            container
            spacing={0}
            justify="flex-start"
            alignContent="flex-start"
            alignItems="flex-start"
          >
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
            spacing={16}
            justify="flex-end"
            alignContent="flex-end"
            alignItems="flex-end"
            style={{ paddingTop: '7%' }}
          >
            <Grid item xs={3} md={2}>
              <AddCircle />
            </Grid>
            <Grid item xs={3} md={2}>
              <AddCircle />
            </Grid>
            <Grid item xs={3} md={2}>
              <AddCircle />
            </Grid>
            <Grid item xs={3} md={2}>
              <AddCircle />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Grid
            container
            spacing={0}
            justify="flex-start"
            alignContent="flex-start"
            alignItems="flex-start"
          >
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
            spacing={16}
            justify="flex-end"
            alignContent="flex-end"
            alignItems="flex-end"
            style={{ paddingTop: '7%' }}
          >
            <Grid item xs={3} md={2}>
              <AddCircle />
            </Grid>
            <Grid item xs={3} md={2}>
              <AddCircle />
            </Grid>
            <Grid item xs={3} md={2}>
              <AddCircle />
            </Grid>
            <Grid item xs={3} md={2}>
              <AddCircle />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default UpcomingEvents;
