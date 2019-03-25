import React from 'react';
import Chart1 from '../DashboardContent/EventsCharts/EventsRegisteredChart';
import Chart2 from '../DashboardContent/EventsCharts/UsersSubscribedChart.jsx';
import Chart3 from '../DashboardContent/EventsCharts/EventsApprovedChart.jsx';
import Grid from '@material-ui/core/Grid';
import StatsCards from '../DashboardContent/StatsCard/StatsCards';

export default class DashboardContent extends React.Component {
  render() {
    return (
      <Grid
        container
        spacing={40}
        direction="row"
        justify="center"
        alignItems="center"
        style={{ paddingTop: '5%' }}
      >
        <Grid item xs={12}>
          <StatsCards />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Chart1 />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Chart2 />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4}>
          <Chart3 />
        </Grid>
      </Grid>
    );
  }
}
