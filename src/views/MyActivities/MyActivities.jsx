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
    borderBottom: '1px solid #e8e8e8'
  },
  tabsIndicator: {
    backgroundColor: '#1890ff'
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
      color: '#40a9ff',
      opacity: 1
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium
    },
    '&:focus': {
      color: '#40a9ff'
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
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
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
      <Paper className={classes.paperRoot}>
        <Typography
          variant="display1"
          color="inherit"
          component="div"
          align="center"
          style={{ padding: '5%' }}
        >
          My Activities
        </Typography>
        <NoSsr>
          <div className={classes.root}>
            {/* <AppBar position="static"> */}
            <Tabs
              value={value}
              onChange={this.handleChange}
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
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavTabs);
