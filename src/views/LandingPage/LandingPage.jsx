import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
//import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Button from 'components/CustomButtons/Button.jsx';

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
//import TeamSection from "./Sections/TeamSection.jsx";
//import WorkSection from "./Sections/WorkSection.jsx";
import SearchBar from "./Sections/SearchBar.jsx";
//import EventsSection from "./Sections/EventsSection.jsx";
import Notifications from 'react-notify-toast';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/users-action.js'

const dashboardRoutes = [];
class LandingPage extends React.Component {

  constructor(props){
    super(props)

    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  onUpdateUser = (event) => {
    this.props.onUpdateUser(event.target.value);
  }

  render() {
    const { classes, ...rest } = this.props;
    const buttonStyle= {
      //marginLeft:'35%',
     // marginRight:'5000px',
    }

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
            color: "dark",
            brand:"2" 
          }}
          {...rest}
        />
      
        <Notifications options={{zIndex: 200, top: '100px'}} />
        <Parallax filter image={require("assets/img/twiddlen-bg-final.jpg")}>
          <div className={classes.container}>
            <GridContainer justify='center' alignItems='center' direction='column'>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classNames(classes.title)}>WE FIND EVENTS YOU DO THEM</h1>
                <h4 className={classes.subtitle}>
                  Enter Zip or Location for accurate nearby event search
                </h4>
                {/* <input onChange={this.onUpdateUser}/>
                <div>{this.props.user}</div> */}
                <GridItem xs={12} sm={12} md={12}>
                <SearchBar/>
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                <h4 className={classes.subtitle}>
                 Organizing an Event? Spread the Word, Reach more People right now.
                 <br/>
                 <Button style={buttonStyle} color="warning" round>Post an Event</Button>
                </h4>
                </GridItem>
                </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main,classes.mainRaised)}>
          <div className={classes.container}>
          {/*
            <ProductSection />
            <TeamSection />
            <WorkSection /> 
          */}
          <ProductSection />  
          </div>
        </div>
        {/*<Footer />*/}
      </div>
    );
  }
}

const mapStateToProps = (state,props) => {
  // console.log(props)
  return {
    products: state.products,
    user: state.user
  }
};

const mapActionsToProps = (dispatch,props) => {
  // console.log(props)
  return bindActionCreators({
    onUpdateUser:updateUser
  },dispatch);  
}

export default (connect(mapStateToProps,mapActionsToProps))(withStyles(landingPageStyle)(LandingPage));
