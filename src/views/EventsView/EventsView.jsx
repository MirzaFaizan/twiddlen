import React from 'react';
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';

import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';

// Sections for this page
import SearchBar from './Sections/SearchBar.jsx';

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
  focusOnSelect: true,
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
        dots: true,
        focusOnSelect: true,
        autoplaySpeed: 1500
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        focusOnSelect: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        dots: false
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

    var min = 1;
    var max = 5;
    var rand = min + Math.floor(Math.random() * (max - min));

    // console.log(rand)
    let images = [
      'http://361degreeevents.com/wp-content/uploads/2016/04/event3.jpg',
      'https://www.fourthwallevents.com/wp-content/uploads/2016/12/SetWidth1920-A-championship-event10.jpg',
      'https://www.gevme.com/blog/wp-content/uploads/2016/12/wsi-imageoptim-event-photographer-reportage-documentary-photography-westfest-2012_21-1.jpg',
      'https://i2.wp.com/somethingdifferentcompanies.com/wp-content/uploads/2016/06/event-image.jpeg',
      'https://www.eventcombo.com/Images/ECImages/3414eb64-1a48-415a-915d-4823abc68fca.jpg'
    ];
    let choosenImage = images[rand];

    const divBackground = {
      backgroundImage: `url(${choosenImage})`,
      height: '40vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative'
    };
    const divText = {
      textAlign: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white'
    };

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
          <Grid
            style={divText}
            container
            spacing={0}
            direction="column"
            justify="center"
            alignContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <SearchBar />
            </Grid>
          </Grid>
        </div>
        <div>
          {/* <GridContainer
            style={divText}
            spacing={8}
            className={classes.container}
          >
            <GridItem style={divText} xs={12} sm={12} md={6}>
              
            </GridItem>
          </GridContainer> */}

          <div style={{ backgroundColor: 'lightgrey', padding: 12 }}>
            <Grid container spacing={24} direction="column">
              <Grid item xs={12}>
                <Typography
                  variant="display1"
                  component="h4"
                  gutterBottom={true}
                  align="center"
                >
                  <div style={{ paddingTop: '1%' }}>
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
                <Grid container spacing={0}>
                  <Grid item xs={12}>
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
                              style={{
                                paddingTop: '10%',
                                paddingBottom: '10%'
                              }}
                            />
                          </div>
                        );
                      })}
                    </Slider>
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
                  <strong>Happening This Month</strong>
                </Typography>
              </Grid>

              <Grid item xs={12} md={12}>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
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
                              style={{
                                paddingTop: '10%',
                                paddingBottom: '10%'
                              }}
                            />
                          </div>
                        );
                      })}
                    </Slider>
                  </Grid>
                </Grid>
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
