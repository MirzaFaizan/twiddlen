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

//import TeamSection from "./Sections/TeamSection.jsx";
//import WorkSection from "./Sections/WorkSection.jsx";
import SearchBar from './Sections/SearchBar.jsx';
//import EventsSection from "./Sections/EventsSection.jsx";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/users-action.js';

import EventCard from './Sections/EventCard/EventCard.jsx';
import EventCard2 from './Sections/EventCard/EventCard2.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Carousel } from '3d-react-carousal';
import Slider from 'react-slick';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplaySpeed: 1500,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
const dashboardRoutes = [];
const eventsData = {
  event1: {
    image:
      'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV',
    name: 'Event 1',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event2: {
    image:
      'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV',
    name: 'Event 2',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event3: {
    image:
      'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV',
    name: 'Event 3',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event4: {
    image:
      'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV',
    name: 'Event 4',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event5: {
    image:
      'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV',
    name: 'Event 5',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event6: {
    image:
      'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV',
    name: 'Event 6',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event7: {
    image:
      'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV',
    name: 'Event 7',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event8: {
    image:
      'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV',
    name: 'Event 8',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event9: {
    image:
      'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV',
    name: 'Event 9',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event10: {
    image:
      'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV',
    name: 'Event 10',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  }
};
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
            color: 'dark',
            brand: '2'
          }}
          {...rest}
        />

        <div style={divBackground}>
          <GridContainer
            style={divText}
            spacing={8}
            className={classes.container}
          >
            <GridItem style={divText} xs={12} sm={12} md={6}>
              <SearchBar />
            </GridItem>
          </GridContainer>
        </div>
        <div>
          <div style={{ backgroundColor: 'lightgrey' }}>
            <Grid container spacing={40} direction="column">
              <Grid item xs={12}>
                <Typography
                  variant="display1"
                  component="h4"
                  gutterBottom={true}
                  align="center"
                >
                  <div style={{ paddingTop: '3%' }}>
                    <strong>Events Happening Today</strong>
                  </div>
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container spacing={0} justify="center">
                  <Grid item xs={12} sm={12} md={8} lg={5}>
                    <Carousel
                      slides={Object.values(eventsData).map((type, key) => {
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
                        );
                      })}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant="display1"
                  component="h3"
                  gutterBottom={true}
                  align="center"
                >
                  <strong>Happening This Week</strong>
                </Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <Slider {...settings}>
                  {Object.values(eventsData).map((type, key) => {
                    return (
                      <div className={classes.container} key={key}>
                        <EventCard2
                          image={type.image}
                          name={type.name}
                          city={type.city}
                          organizerName={type.organizerName}
                          timeAndDate={type.timeAndDate}
                          description={type.description}
                        />
                        <div
                          style={{ paddingTop: '10%', paddingBottom: '10%' }}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant="display1"
                  component="h3"
                  gutterBottom={true}
                  align="center"
                >
                  <strong>Happening This Month</strong>
                </Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <Slider {...settings}>
                  {Object.values(eventsData).map((type, key) => {
                    return (
                      <div className={classes.container} key={key}>
                        <EventCard2
                          image={type.image}
                          name={type.name}
                          city={type.city}
                          organizerName={type.organizerName}
                          timeAndDate={type.timeAndDate}
                          description={type.description}
                        />
                        <div
                          style={{ paddingTop: '10%', paddingBottom: '10%' }}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  // console.log(props);
  return {
    products: state.products,
    user: state.user
  };
};

const mapActionsToProps = (dispatch, props) => {
  // console.log(props);
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
