import React, { Component } from 'react';
import SideBar from './SideBar/SideBar.jsx';

import { connect } from 'react-redux';
import AdminLogin from './AdminLogin.jsx';
import { updateAdmin } from '../../actions/admin-action.js';
import { bindActionCreators } from 'redux';

class AdminPage extends Component {
  componentWillMount() {
    let token = localStorage.getItem('adminToken');
    if (token) {
      this.props.onUpdateAdmin(true);
    }
  }
  componentDidMount() {
    console.log(this.props.loggedIn);
  }
  loggedIN = () => {
    if (this.props.loggedIn) {
      return <SideBar loggedIn={this.props.loggedIn} />;
    } else {
      return <AdminLogin />;
    }
  };
  render() {
    return <div>{this.loggedIN()}</div>;
  }
}

const mapStatetoProps = state => {
  console.log(state.admin);
  return { loggedIn: state.admin };
};

const mapActionsToProps = (dispatch, props) => {
  console.log(props);
  return bindActionCreators(
    {
      onUpdateAdmin: updateAdmin
    },
    dispatch
  );
};

export default connect(
  mapStatetoProps,
  mapActionsToProps
)(AdminPage);
