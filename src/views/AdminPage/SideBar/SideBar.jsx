import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {Dashboard} from '@material-ui/icons';

//import './AdminCss/SideBar.css';
import DashboardContent from '../../AdminPage/SideBar/DashboardContent/DashboardContent';


import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Notification from '@material-ui/icons/NotificationsNone';

import ApprovedEvents from '../SideBar/EventsContent/ApprovedEvents.jsx';
import PendingEvents from '../SideBar/EventsContent/PendingEvents.jsx';
import RejectedEvents from '../SideBar/EventsContent/RejectedEvents.jsx';
import PostEvents from '../SideBar/EventsContent/PostEvents'
import NotificationsSender from '../SideBar/NotificationsContent/NotificationsSender.jsx';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    backgroundColor:'grey',
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

const dropdownStyle ={
  paddingLeft:'25%'
}
class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    open:false,
    centreContent:<DashboardContent/>,
    selectedIndex: 1,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  DashBoardHandleClick = () => {
    console.log(this.props.loggedIn)
    this.setState({
      centreContent:<DashboardContent/>,
      selectedIndex:0,
    })
  }

  PendingHandleClick = () => {
    this.setState({
      centreContent:<PendingEvents/>,
      selectedIndex:2,
    })
  }
  ApprovedHandleClick = () => {
    this.setState({
      centreContent:<ApprovedEvents/>,
      selectedIndex:3,
    })
  }
  RejectedHandleClick = () => {
    this.setState({
      centreContent:<RejectedEvents/>,
      selectedIndex:4,
    })
  }

  EventPostingHandleClick = () => {
    this.setState({
      centreContent:<PostEvents/>,
      selectedIndex:5,
    })
  }


  NotifcationsHandleClick = () => {
    this.setState({
      centreContent:<NotificationsSender/>,
      selectedIndex:6,
    })
  }

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index,
                    centreContent:<event/> });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
         <ListItem button selected={this.state.selectedIndex === 0} onClick={()=>this.DashBoardHandleClick()}>
             <ListItemIcon ><Dashboard/></ListItemIcon>
             <ListItemText primary="Dashboard"/>
         </ListItem>
         <ListItem button  onClick={() => this.handleClick()}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Events" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button selected={this.state.selectedIndex === 2} onClick={() => this.PendingHandleClick()} style={dropdownStyle}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Pending" />
            </ListItem>
          <ListItem button selected={this.state.selectedIndex === 3} onClick={()=>this.ApprovedHandleClick()} style={dropdownStyle}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Approved" />
            </ListItem>
            <ListItem button selected={this.state.selectedIndex === 4} onClick={()=>this.RejectedHandleClick()} style={dropdownStyle}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Rejected" />
            </ListItem>
            <ListItem button selected={this.state.selectedIndex === 5} onClick={()=>this.EventPostingHandleClick()} style={dropdownStyle}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Event Posting" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button selected={this.state.selectedIndex === 6} onClick={()=>this.NotifcationsHandleClick()}>
              <ListItemIcon>
                <Notification />
              </ListItemIcon>
              <ListItemText inset primary="Notifications Sender" />
        </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Twiddlen Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.state.centreContent}
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};



export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
