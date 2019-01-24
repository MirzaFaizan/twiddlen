import React from 'react';
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import Header from 'components/Header/Header.jsx';
//import Footer from "components/Footer/Footer.jsx";
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';

import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';
// Sections for this page
import ProductSection from './Sections/ProductSection.jsx';

//import TeamSection from "./Sections/TeamSection.jsx";
//import WorkSection from "./Sections/WorkSection.jsx";
import SearchBar from './Sections/SearchBar.jsx';
//import EventsSection from "./Sections/EventsSection.jsx";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/users-action.js';

const dashboardRoutes = [];
class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser = event => {
    this.props.onUpdateUser(event.target.value);
  };

  render() {
    const { classes, ...rest } = this.props;

    const divBackground = {
      backgroundImage: `url(http://wallpapers.ae/wp-content/uploads/2015/10/New-year-events-wallpaper.jpg)`,
      height: '500px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative'

      // borderLeft: '150px solid transparent',
      // borderRight: '150px solid transparent',
      // borderTop:'100px solid transparent'
      // width: 0,
      // height: 0,
    };
    const divText = {
      textAlign: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white'
    };

    // const divaText = {
    //   textAlign: 'center',
    //   position: 'absolute',
    //   top: '50%',
    //   left: '50%',
    //   transform: 'translate(-50%, -50%)',
    //   color: 'white'
    // }

    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="1"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: 'black',
            brand: '2'
          }}
          {...rest}
        />

        <div style={divBackground}>
          <GridContainer
            style={divText}
            spacing={0}
            className={classes.container}
          >
            <GridItem style={divText} xs={12} sm={12} md={6}>
              <SearchBar />
            </GridItem>
          </GridContainer>
        </div>
        <div style={{ backgroundColor: 'lightgrey' }}>
          <div className={classes.container}>
            <ProductSection />
          </div>
        </div>
        {/*<Footer />*/}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(props);
  return {
    products: state.products,
    user: state.user
  };
};

const mapActionsToProps = (dispatch, props) => {
  console.log(props);
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
