import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
//import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";


import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
// Sections for this page

//import TeamSection from "./Sections/TeamSection.jsx";
//import WorkSection from "./Sections/WorkSection.jsx";
import SearchBar from "./Sections/SearchBar.jsx";
//import EventsSection from "./Sections/EventsSection.jsx";


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/users-action.js'

import EventCard from './Sections/EventCard/EventCard.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {Carousel} from '3d-react-carousal';

const dashboardRoutes = [];


const eventsData = {
  event1:{
    image:'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV',
    name:'Event 1',
    city:'Kanses City',
    organizerName:'Big John McCarty.',
    timeAndDate:'9AM, 20 July 2020',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"    
  },
  event2:{
    image:'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV',
    name:'Event 2',
    city:'Kanses City',
    organizerName:'Big John McCarty.',
    timeAndDate:'9AM, 20 July 2020',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"    
  },
  event3:{
    image:'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV',
    name:'Event 3',
    city:'Kanses City',
    organizerName:'Big John McCarty.',
    timeAndDate:'9AM, 20 July 2020',
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"    
  }
}
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
   
    const divBackground = {
        backgroundImage:`url(http://wallpapers.ae/wp-content/uploads/2015/10/New-year-events-wallpaper.jpg)`,
        height: '500px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        
        // borderLeft: '150px solid transparent',
        // borderRight: '150px solid transparent', 
        // borderTop:'100px solid transparent'
        // width: 0, 
        // height: 0,
        
    }
    const divText = {
      textAlign: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white'
    }
    
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
            color: "dark",
            brand:"2" 
          }}
          {...rest}
        />
       
        <div style={divBackground}>
        <GridContainer style={divText} spacing={0} className={classes.container}>
          <GridItem style={divText} xs={12} sm={12} md={6}>
            <SearchBar/>
          </GridItem>
        </GridContainer>
        </div>
        <div>
          <div>
            <Grid container spacing={0} direction="column">
              <Grid item xs={12}>
                <Typography variant='h3' component='h3' gutterBottom={true} align="center">
                    Happening Today
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
              <Grid container spacing={0} justify="center">
              <Grid item xs={12} sm={6} md={6}>
              <Carousel slides={
                  Object.values(eventsData).map((type,key)=>{
                    return (  
                    <Grid item xs={12}>
                     <EventCard 
                     key={key}
                     image={type.image}
                     name={type.name}
                     city={type.city}
                     organizerName={type.organizerName}
                     timeAndDate={type.timeAndDate}
                     description={type.description}
                     />
                     </Grid>
                     )
                 })
             }/>
             </Grid>
              </Grid>
             
             </Grid>
           
              <Grid item xs={12}>
                <Typography variant='h3' component='h3' gutterBottom={true} align="center">
                    Happening This Week
                </Typography>
              </Grid>
            
              <Grid item xs={12}>
                <Typography variant='h3' component='h3' gutterBottom={true} align="center">
                    Happening This Month
                </Typography>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
        
    );
  }
}

const mapStateToProps = (state,props) => {
  console.log(props)
  return {
    products: state.products,
    user: state.user
  }
};

const mapActionsToProps = (dispatch,props) => {
  console.log(props)
  return bindActionCreators({
    onUpdateUser:updateUser
  },dispatch);  
}

export default (connect(mapStateToProps,mapActionsToProps))(withStyles(landingPageStyle)(LandingPage));
