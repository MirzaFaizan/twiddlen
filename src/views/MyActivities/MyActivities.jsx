import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import UpcomingEvents from './UpcomingEvents/UpcomingEvents';
import MyEvents from './MyEvents/MyEvents.jsx';
import ExpiredEvents from './ExpiredEvents/ExpiredEvents.jsx';

// import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Header from 'components/Header/Header.jsx';

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
    width: '100%',
    backgroundColor: 'rgba(0,0,0, 0.4)',
    margin: 0,
    zIndex: 2,
    color: 'white'
  },
  tabsRoot: {
    borderBottom: '1px solid #e8e8e8',
    color: 'orange'
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
      color: 'white',
      fontWeight: theme.typography.fontWeightMedium
    },
    '&:focus': {
      color: 'white'
    }
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3
  },
  paperRoot: {
    backgroundColor: 'rgba(0,0,0, 0.4)',
    margin: 0,
    position: 'absolute',
    width: '90%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2
    // filter:'blur(1px)',
    // webkitFilter: 'blur(1px)'
  },
  blurred: {
    filter: 'blur(13px)',
    margin: 0,
    height: '400px',
    backgroundColor: 'rgba(192,192,192, 0.7)',
    position: 'absolute',
    width: '90%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2
  },
  bgImage: {
    backgrounColor: 'grey',
    backgroundImage: `url('https://coresites-cdn.factorymedia.com/twc/wp-content/uploads/2017/02/lwr_beth_bryn_hodge_peloton_drops_in_front_1150.jpg')`,
    backgroundSize: 'cover',
    height: '100vh',
    position: 'relative'
    // filter: 'blur(5px)',
    // webkitFilter: 'blur(5px)'
  }
});

const dashboardRoutes = [];

class NavTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, ...rest } = this.props;
    const { value } = this.state;

    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="1"
          // rightLinks={<HeaderLinks history={this.props.history} />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: 'dark',
            brand: '2'
          }}
          {...rest}
        />
        <div className={classes.bgImage} />
        <div className={classes.blurred} />

        <Paper className={classes.paperRoot}>
          <Typography
            variant="display1"
            component="div"
            align="center"
            style={{ padding: '5%', color: 'white' }}
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
