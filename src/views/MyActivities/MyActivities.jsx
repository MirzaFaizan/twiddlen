import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import MyEvents from './MyEvents/MyEvents.jsx';
import ExpiredEvents from './ExpiredEvents/ExpiredEvents.jsx';

import Paper from '@material-ui/core/Paper';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

// function LinkTab(props) {
//   return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
// }

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
    color: 'black'
  },
  tabsIndicator: {
    backgroundColor: 'orange'
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
      color: 'black',
      opacity: 1
    },
    '&$tabSelected': {
      color: 'brown',
      fontWeight: theme.typography.fontWeightMedium
    },
    '&:focus': {
      color: 'brown'
    }
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3
  },
  paperRoot: {
    margin: 0,
    position: 'absolute',
    width: '75%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '500px',
    overflow: 'auto'
  },
  bgImage: {
    backgrounColor: 'grey',
    backgroundImage: `url('https://coresites-cdn.factorymedia.com/twc/wp-content/uploads/2017/02/lwr_beth_bryn_hodge_peloton_drops_in_front_1150.jpg')`,
    backgroundSize: 'cover',
    height: '100vh',
    position: 'relative',
    filter: 'blur(5px)',
    webkitFilter: 'blur(5px)'
  }
});

class NavTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <div className={classes.bgImage} />
        <Paper className={classes.paperRoot}>
          <Typography
            variant="display1"
            component="div"
            align="center"
            style={{ padding: '5%', color: 'black' }}
          >
            My Activities
          </Typography>
          <NoSsr>
            <div className={classes.root}>
              {/* <AppBar position="static"> */}
              <Tabs
                value={value}
                onChange={this.handleChange}
                variant="scrollable"
                classes={{
                  root: classes.tabsRoot,
                  indicator: classes.tabsIndicator
                }}
              >
                <Tab
                  disableRipple
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected
                  }}
                  label="Upcoming Events"
                />
                <Tab
                  disableRipple
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected
                  }}
                  label="Expired Events"
                />
                <Tab
                  disableRipple
                  classes={{
                    root: classes.tabRoot,
                    selected: classes.tabSelected
                  }}
                  label="My Events"
                />
              </Tabs>
              {/* </AppBar> */}
              {value === 0 && (
                <TabContainer>
                  <UpcomingEvents />
                </TabContainer>
              )}
              {value === 1 && (
                <TabContainer>
                  <ExpiredEvents />
                </TabContainer>
              )}
              {value === 2 && (
                <TabContainer>
                  <MyEvents />
                </TabContainer>
              )}
            </div>
          </NoSsr>
        </Paper>
      </div>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavTabs);
