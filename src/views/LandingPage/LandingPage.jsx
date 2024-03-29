import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import { Redirect } from 'react-router-dom';
// core components
import Header from 'components/Header/Header.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';
// import Button from 'components/CustomButtons/Button.jsx';

import Typography from '@material-ui/core/Typography';

import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';
// Sections for this page
import ProductSection from './Sections/ProductSection.jsx';
// import SearchBar from './Sections/SearchBar.jsx';
//import EventsSection from "./Sections/EventsSection.jsx";
// import Notifications from 'react-notify-toast';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/users-action.js';

import AddEvent from '../PostEventsClient/PostEventsClient.jsx';
import LoadingScreen from 'react-loading-screen';

const dashboardRoutes = [];

const dynamicImage = require('assets/img/twiddlen-bg-final.jpg');
class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser = event => {
    this.props.onUpdateUser(event.target.value);
  };

  componentDidMount() {
    this.setState({
      loading: false
    });
  }

  render() {
    const { classes, ...rest } = this.props;
    // const buttonStyle = {
    //   marginLeft:'35%',
    //   marginRight:'5000px',
    // };

    return this.props.client ? (
      <Redirect to="/home-page" />
    ) : (
      <div>
        <LoadingScreen
          loading={this.state.loading}
          bgColor="#f1f1f1"
          spinnerColor="#9ee5f8"
          textColor="#676767"
          logoSrc="/logo.png"
          text="Here an introduction sentence (Optional)"
        >
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

          {/* <Notifications options={{ zIndex: 200, top: '100px' }} /> */}
          <Parallax filter image={dynamicImage}>
            <div className={classes.container}>
              <div style={{ position: 'absolute', right: 2, bottom: 30 }}>
                <AddEvent client={this.props.client} />
              </div>
              <GridContainer
                justify="center"
                alignItems="center"
                direction="column"
              >
                <GridItem xs={12} sm={12} md={6}>
                  <Typography
                    variant="display2"
                    component="div"
                    align="center"
                    color="inherit"
                  >
                    LOCAL VIBES FOR YOU
                  </Typography>
                  {/* <h4 className={classes.subtitle}>
                  Enter Zip or Location for accurate nearby vibe search
                </h4> */}
                  {/* <input onChange={this.onUpdateUser}/>
                <div>{this.props.user}</div> */}
                  {/* <GridItem xs={12} sm={12} md={12}>
                  <SearchBar history={this.props.history} />
                </GridItem> */}
                  <GridItem xs={12} sm={12} md={12}>
                    {/* <h4 className={classes.subtitle}> */}
                    <Typography
                      align="center"
                      color="inherit"
                      variant="subtitle2"
                    >
                      Organizing a VIBE? Spread the Word, Reach more People
                      right now
                    </Typography>
                    <br />
                    {/* <Button style={buttonStyle} color="warning" round>
                      Post an Event
                    </Button> */}
                    {/* </h4> */}
                  </GridItem>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <ProductSection history={this.props.history} />
            </div>
          </div>
        </LoadingScreen>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  // console.log(props);
  return {
    history: props.history,
    client: state.client
  };
};

const mapActionsToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onUpdateUser: updateUser
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(landingPageStyle)(LandingPage));
