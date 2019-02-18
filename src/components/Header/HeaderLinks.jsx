/*eslint-disable*/
import React from 'react';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import Tooltip from '@material-ui/core/Tooltip';

// import Slide from '@material-ui/core/Slide';
// import Dialog from '@material-ui/core/Dialog';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogActions from '@material-ui/core/DialogActions';
// import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import Close from '@material-ui/icons/Close';
import { Apps, CloudDownload } from '@material-ui/icons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateClient } from '../../actions/client-action.js';

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';
import Button from 'components/CustomButtons/Button.jsx';

import modalStyle from 'assets/jss/material-kit-react/modalStyle.jsx';
import headerLinksStyle from 'assets/jss/material-kit-react/components/headerLinksStyle.jsx';
import LoginPage from 'views/LoginPage/LoginPage.jsx';
import RegisterPage from 'views/RegisterPage/RegisterPage.jsx';

import Search from '../../views/LandingPage/Sections/SearchBar.jsx';

class HeaderLinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchDisplay: false
    };
  }

  displaySearch = () => {
    this.setState({
      searchDisplay: true
    });
  };

  display = () => {
    const { classes } = this.props;
    if (this.props.client) {
      return (
        <List className={classes.list}>
          {/* <ListItem className={classes.listItem}>
          <Search/>
        </ListItem> */}
          <ListItem className={classes.listItem}>
            {/*Login button*/}
            <Button
              color="transparent"
              simple
              onClick={() => {
                this.props.history.push('/my-activities');
              }}
            >
              My Activities
            </Button>
            <Button
              color="transparent"
              simple
              onClick={() => {
                this.props.history.push('/my-settings');
              }}
            >
              Settings
            </Button>
            <Button
              color="transparent"
              simple
              onClick={() => {
                this.props.onUpdateClient(false);
              }}
            >
              Log Out
            </Button>
          </ListItem>
        </List>
      );
    } else {
      return (
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            {/*Login button*/}
            <LoginPage />
          </ListItem>
          <ListItem className={classes.listItem}>
            <RegisterPage />
          </ListItem>
        </List>
      );
    }
  };

  render() {
    return this.display();
  }
}

const mapStateToProps = (state, props) => {
  console.log(props);
  return {
    client: state.client
  };
};

const mapActionsToProps = dispatch => {
  // console.log(props);
  return bindActionCreators(
    {
      onUpdateClient: updateClient
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(headerLinksStyle)(HeaderLinks));
