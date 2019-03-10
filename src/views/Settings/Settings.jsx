import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';

import UserProfile from './UserProfile/UserProfile.jsx';
import Notifications from './Notifications/Notifications.jsx';
import SocialMediaConnections from './SocialMediaConnections/SocialMediaConnections.jsx';

import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Header from 'components/Header/Header.jsx';

const styles = theme => ({
  root: {
    width: '100%',
    // backgroundColor: 'rgb(0,0,0)', /* Fallback color */
    backgroundColor: 'rgba(0,0,0, 0.4)',
    margin: 0,
    zIndex: 2
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    color: 'white'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: 'white'
  },
  paperRoot: {
    // backgroundColor: 'rgb(0,0,0)', /* Fallback color */
    backgroundColor: 'rgba(0,0,0, 0.4)',
    margin: 0,
    position: 'absolute',
    width: '90%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2
  },
  customHeading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    paddingTop: '1%'
  },
  bgImage: {
    backgrounColor: 'grey',
    backgroundImage: `url('https://coresites-cdn.factorymedia.com/twc/wp-content/uploads/2017/02/lwr_beth_bryn_hodge_peloton_drops_in_front_1150.jpg')`,
    backgroundSize: 'cover',
    height: '100vh',
    position: 'relative',
    filter: 'blur(1px)'
    // webkitFilter: 'blur(5px)'
  },
  expansionPanel: {
    width: '100%',
    // backgroundColor: 'rgb(0,0,0)', /* Fallback color */
    backgroundColor: 'rgba(0,0,0, 0.4)',
    margin: 0,
    zIndex: 2
  },
  blurred: {
    filter: 'blur(100px)',
    margin: 0,
    height: '500px',
    backgroundColor: 'rgba(192,192,255, 0.7)',
    position: 'absolute',
    width: '90%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 0
  },
  expandIcon: {
    color: 'orange'
  }
});

const dashboardRoutes = [];

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes, ...rest } = this.props;
    const { expanded } = this.state;

    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="1"
          rightLinks={<HeaderLinks history={this.props.history} />}
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
            My Settings
          </Typography>
          <div className={classes.root}>
            <ExpansionPanel
              expanded={expanded === 'panel4'}
              onChange={this.handleChange('panel4')}
              className={classes.expansionPanel}
            >
              <ExpansionPanelSummary
                classes={{
                  expandIcon: classes.expandIcon
                }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography className={classes.heading}>
                  User Profile
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Edit your Profile if you want!
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <UserProfile />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            {/* <ExpansionPanel
              expanded={expanded === 'panel1'}
              onChange={this.handleChange('panel1')}
              className={classes.expansionPanel}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Favorites</Typography>
                <Typography className={classes.secondaryHeading}>
                  Favorites Details Go Here!
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography style={{ color: 'white' }}>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel> */}
            <ExpansionPanel
              expanded={expanded === 'panel2'}
              onChange={this.handleChange('panel2')}
              className={classes.expansionPanel}
            >
              <ExpansionPanelSummary
                classes={{
                  expandIcon: classes.expandIcon
                }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography className={classes.heading}>Categories</Typography>
                <Typography className={classes.secondaryHeading}>
                  Different Categories
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography style={{ color: 'white' }}>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat
                  lectus, varius pulvinar diam eros in elit. Pellentesque
                  convallis laoreet laoreet.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === 'panel3'}
              onChange={this.handleChange('panel3')}
              className={classes.expansionPanel}
            >
              <ExpansionPanelSummary
                classes={{
                  expandIcon: classes.expandIcon
                }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography className={classes.heading}>
                  Notifications
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  On/Off Notifications
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Notifications />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            {/* <ExpansionPanel
              expanded={expanded === 'panel4'}
              onChange={this.handleChange('panel4')}
              className={classes.expansionPanel}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  User Profile
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Edit your Profile if you want!
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <UserProfile />
              </ExpansionPanelDetails>
            </ExpansionPanel> */}
            <ExpansionPanel
              expanded={expanded === 'panel5'}
              onChange={this.handleChange('panel5')}
              className={classes.expansionPanel}
            >
              <ExpansionPanelSummary
                classes={{
                  expandIcon: classes.expandIcon
                }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography className={classes.heading}>
                  Social Media Connections
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  Social Media Connection Buttons
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <SocialMediaConnections />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === 'panel6'}
              onChange={this.handleChange('panel6')}
              className={classes.expansionPanel}
            >
              <ExpansionPanelSummary
                classes={{
                  expandIcon: classes.expandIcon
                }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography className={classes.heading}>
                  Followers/Following
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography style={{ color: 'white' }}>
                  Followers Following Will go here
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              expanded={expanded === 'panel7'}
              onChange={this.handleChange('panel7')}
              className={classes.expansionPanel}
            >
              <ExpansionPanelSummary
                classes={{
                  expandIcon: classes.expandIcon
                }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography className={classes.heading}>
                  Payment Information
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography style={{ color: 'white' }}>
                  Payment Information will go here
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </Paper>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledExpansionPanels);
