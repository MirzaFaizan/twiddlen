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

import Fade from '@material-ui/core/Fade';

import Slide from '@material-ui/core/Slide';

var settings = {
  dots: true,
  //focusOnSelect: true,
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
    sponsor:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Chevrolet_logo.svg/1200px-Chevrolet_logo.svg.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event2: {
    image:
      'https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,h_600,q_50,w_1400/v1/clients/virginiabeachva/144_3_1707_jpeg_55eee7dc-c6ef-41f7-b7b4-23bf044e565a.jpg',
    name: 'Event 2',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://di-uploads-pod4.dealerinspire.com/rivercityhyundai/uploads/2017/05/HyundaiLogoStacked_4cblk-1024x659.gif',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event3: {
    image:
      'https://www.gevme.com/blog/wp-content/uploads/2016/12/wsi-imageoptim-event-photographer-reportage-documentary-photography-westfest-2012_21-1.jpg',
    name: 'Event 3',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://cdn.thingiverse.com/renders/08/c8/e7/c0/45/5d54f02a5fb2246c3058171b3dd19f1b_preview_featured.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event4: {
    image:
      'http://www.bvidestinationmanagement.com/wp-content/uploads/2018/03/Event-Management.jpeg',
    name: 'Event 4',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://www.businessinsider.com/image/53d29d5c6bb3f7a80617ada8-1200-924/nike-logo.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event5: {
    image: 'http://orientindia.com/admin//130/evt_photo/3_event_management.jpg',
    name: 'Event 5',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://www.logodesignlove.com/images/evolution/7up-logo-old-01.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event6: {
    image:
      'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/02/00-event-table.jpg?itok=-nkXo5O-&fc=50,50',
    name: 'Event 6',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://vignette.wikia.nocookie.net/logopedia/images/6/63/Pizza_Hut_2012_logo.png/revision/latest?cb=20140507122847',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event7: {
    image:
      'http://marketing4startups.co.uk/ImageEvents/wp-content/uploads/2016/02/event-management-placeholder.jpg',
    name: 'Event 7',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor: 'https://fontmeme.com/images/McDonald%E2%80%99s-Logo.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event8: {
    image:
      'https://images.yourstory.com/2015/03/yourstory_AppFriday_EventsHigh.jpg',
    name: 'Event 8',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://upload.wikimedia.org/wikipedia/commons/0/0f/Pepsi_logo_2014.svg',
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
    sponsor:
      'https://brandongaille.com/wp-content/uploads/2013/08/Adidas-Company-Logo.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
  },
  event10: {
    image: 'http://361degreeevents.com/wp-content/uploads/2016/04/event3.jpg',
    name: 'Event 10',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgLZs6BAPfLl4cmxCrU0QnItdBOLmFoux-fOt43Xa7ktbtXmvZ',
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
    var max = 10;
    let images = [];

    Object.values(eventsData).map((type, key) => {
      images.push(type.image);
      max = key;
      return null;
    });

    var rand = min + Math.floor(Math.random() * (max - min));

    let choosenImage = images[rand];

    const divBackground = {
      backgroundImage: `url(${choosenImage})`,
      height: '45vh',
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
              <Slide
                direction="down"
                timeout={1000}
                in={true}
                mountOnEnter
                unmountOnExit
              >
                <SearchBar />
              </Slide>
            </Grid>
          </Grid>
        </div>
        <div>
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
                  <Fade in={true} timeout={0}>
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
                                sponsor={type.sponsor}
                              />
                            </Grid>
                          );
                        })}
                      />
                    </Grid>
                  </Fade>
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
                          <Fade in={true} timeout={10000} key={key}>
                            <div className={classes.container}>
                              <EventCard2
                                image={type.image}
                                name={type.name}
                                city={type.city}
                                organizerName={type.organizerName}
                                timeAndDate={type.timeAndDate}
                                description={type.description}
                                sponsor={type.sponsor}
                              />
                              <div
                                style={{
                                  paddingTop: '10%',
                                  paddingBottom: '10%'
                                }}
                              />
                            </div>
                          </Fade>
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
                          <Fade in={true} timeout={15000} key={key}>
                            <div className={classes.container}>
                              <EventCard2
                                image={type.image}
                                name={type.name}
                                city={type.city}
                                organizerName={type.organizerName}
                                timeAndDate={type.timeAndDate}
                                description={type.description}
                                sponsor={type.sponsor}
                              />
                              <div
                                style={{
                                  paddingTop: '10%',
                                  paddingBottom: '10%'
                                }}
                              />
                            </div>
                          </Fade>
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
