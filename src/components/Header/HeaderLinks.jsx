/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";

// @material-ui/icons
import Close from "@material-ui/icons/Close";
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import modalStyle from "assets/jss/material-kit-react/modalStyle.jsx";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import RegisterPage from "views/RegisterPage/RegisterPage.jsx";


class HeaderLinks extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
          {/*Login button*/} 
          <LoginPage/>
          {/*
          <Button
          color="rose"
          round
          onClick={() => this.handleClickOpen("modal")}>
          Log In
          </Button>
          */}
          </ListItem>
          <ListItem className={classes.listItem}>
           <RegisterPage/>
          </ListItem>
         
         {/*
          <ListItem className={classes.listItem}>
            <Tooltip
              id="instagram-twitter"
              title="Follow us on twitter"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                href="https://twitter.com/CreativeTim"
                target="_blank"
                color="transparent"
                className={classes.navLink}
              >
                <i className={classes.socialIcons + " fab fa-twitter"} />
              </Button>
            </Tooltip>
          </ListItem>
         <ListItem className={classes.listItem}>
            <Tooltip
              id="instagram-facebook"
              title="Follow us on facebook"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                href="https://www.facebook.com/CreativeTim"
                target="_blank"
                className={classes.navLink}
              >
                <i className={classes.socialIcons + " fab fa-facebook"} />
              </Button>
            </Tooltip>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Tooltip
              id="instagram-tooltip"
              title="Follow us on instagram"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="transparent"
                href="https://www.instagram.com/CreativeTimOfficial"
                target="_blank"
                className={classes.navLink}
              >
                <i className={classes.socialIcons + " fab fa-instagram"} />
              </Button>
            </Tooltip>
          </ListItem>
        */} 
        </List>
       
        </div>
      );
  }
}


export default withStyles(headerLinksStyle)(HeaderLinks);
