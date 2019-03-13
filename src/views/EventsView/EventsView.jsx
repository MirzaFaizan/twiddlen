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
// import SearchBar from './Sections/SearchBar.jsx';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/users-action.js';

import LocalVibe from './Sections/EventCard/EventCard.jsx';
import LocalVibe2 from './Sections/EventCard/EventCard2.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AddEvent from '../PostEventsClient/PostEventsClient.jsx';
import { Carousel } from '3d-react-carousal';
import Slider from 'react-slick';

// import Fade from '@material-ui/core/Fade';

// import Slide from '@material-ui/core/Slide';

import axios from 'axios';

import Link from '@material-ui/core/Link';
import LoadingScreen from 'react-loading-screen';

import Hidden from '@material-ui/core/Hidden';

// import ArrowForward from '@material-ui/icons/ArrowForward';
// import ArrowBack from '@material-ui/icons/ArrowBack'

// let abc = []

var settings = {
  dots: true,
  // className: "center",
  centerMode: true,
  speed: 700,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplaySpeed: 1500,
  adaptiveHeight: true,
  // nextArrow:<ArrowForward/>,
  // prevArrow:<ArrowBack/>,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        className: 'center',
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        focusOnSelect: true,
        autoplaySpeed: 1500
        // nextArrow:<ArrowForward/>,
        // prevArrow:<ArrowBack/>,
      }
    },
    {
      breakpoint: 600,
      settings: {
        className: 'center',
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        focusOnSelect: true,
        dots: true
        // nextArrow:<ArrowForward/>,
        // prevArrow:<ArrowBack/>,
      }
    },
    {
      breakpoint: 480,
      settings: {
        className: 'center',
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        dots: true
        // nextArrow:<ArrowForward/>,
        // prevArrow:<ArrowBack/>,
      }
    }
  ]
};

const dashboardRoutes = [];
// const vibesData = {
//   vibe1: {
//     image:
//       'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV',
//     name: 'Vibe 1',
//     city: 'Kanses City',
//     organizerName: 'Big John McCarty.',
//     timeAndDate: '9AM, 20 July 2020',
//     sponsor:
//       'https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Chevrolet_logo.svg/1200px-Chevrolet_logo.svg.png',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
//   },
//   vibe2: {
//     image:
//       'https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,h_600,q_50,w_1400/v1/clients/virginiabeachva/144_3_1707_jpeg_55eee7dc-c6ef-41f7-b7b4-23bf044e565a.jpg',
//     name: 'Vibe 2',
//     city: 'Kanses City',
//     organizerName: 'Big John McCarty.',
//     timeAndDate: '9AM, 20 July 2020',
//     sponsor:
//       'https://di-uploads-pod4.dealerinspire.com/rivercityhyundai/uploads/2017/05/HyundaiLogoStacked_4cblk-1024x659.gif',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
//   },
//   vibe3: {
//     image:
//       'https://www.gevme.com/blog/wp-content/uploads/2016/12/wsi-imageoptim-event-photographer-reportage-documentary-photography-westfest-2012_21-1.jpg',
//     name: 'Vibe 3',
//     city: 'Kanses City',
//     organizerName: 'Big John McCarty.',
//     timeAndDate: '9AM, 20 July 2020',
//     sponsor:
//       'https://cdn.thingiverse.com/renders/08/c8/e7/c0/45/5d54f02a5fb2246c3058171b3dd19f1b_preview_featured.jpg',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
//   },
//   vibe4: {
//     image:
//       'http://www.bvidestinationmanagement.com/wp-content/uploads/2018/03/Event-Management.jpeg',
//     name: 'Vibe 4',
//     city: 'Kanses City',
//     organizerName: 'Big John McCarty.',
//     timeAndDate: '9AM, 20 July 2020',
//     sponsor:
//       'https://www.businessinsider.com/image/53d29d5c6bb3f7a80617ada8-1200-924/nike-logo.png',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
//   },
//   vibe5: {
//     image: 'http://orientindia.com/admin//130/evt_photo/3_event_management.jpg',
//     name: 'Vibe 5',
//     city: 'Kanses City',
//     organizerName: 'Big John McCarty.',
//     timeAndDate: '9AM, 20 July 2020',
//     sponsor:
//       'https://www.logodesignlove.com/images/evolution/7up-logo-old-01.jpg',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
//   },
//   vibe6: {
//     image:
//       'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/02/00-event-table.jpg?itok=-nkXo5O-&fc=50,50',
//     name: 'Vibe 6',
//     city: 'Kanses City',
//     organizerName: 'Big John McCarty.',
//     timeAndDate: '9AM, 20 July 2020',
//     sponsor:
//       'https://vignette.wikia.nocookie.net/logopedia/images/6/63/Pizza_Hut_2012_logo.png/revision/latest?cb=20140507122847',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
//   },
//   vibe7: {
//     image:
//       'http://marketing4startups.co.uk/ImageEvents/wp-content/uploads/2016/02/event-management-placeholder.jpg',
//     name: 'Vibe 7',
//     city: 'Kanses City',
//     organizerName: 'Big John McCarty.',
//     timeAndDate: '9AM, 20 July 2020',
//     sponsor: 'https://fontmeme.com/images/McDonald%E2%80%99s-Logo.jpg',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
//   },
//   vibe8: {
//     image:
//       'https://images.yourstory.com/2015/03/yourstory_AppFriday_EventsHigh.jpg',
//     name: 'Vibe 8',
//     city: 'Kanses City',
//     organizerName: 'Big John McCarty.',
//     timeAndDate: '9AM, 20 July 2020',
//     sponsor:
//       'https://upload.wikimedia.org/wikipedia/commons/0/0f/Pepsi_logo_2014.svg',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
//   },
//   vibe9: {
//     image:
//       'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV',
//     name: 'Vibe 9',
//     city: 'Kanses City',
//     organizerName: 'Big John McCarty.',
//     timeAndDate: '9AM, 20 July 2020',
//     sponsor:
//       'https://brandongaille.com/wp-content/uploads/2013/08/Adidas-Company-Logo.jpg',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
//   },
//   vibe10: {
//     image: 'http://361degreeevents.com/wp-content/uploads/2016/04/event3.jpg',
//     name: 'Vibe 10',
//     city: 'Kanses City',
//     organizerName: 'Big John McCarty.',
//     timeAndDate: '9AM, 20 July 2020',
//     sponsor:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgLZs6BAPfLl4cmxCrU0QnItdBOLmFoux-fOt43Xa7ktbtXmvZ',
//     description:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an"
//   }
// };
class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.onUpdateUser = this.onUpdateUser.bind(this);

    this.state = {
      eventsData: '',
      loading: true
    };
  }

  componentWillMount() {
    axios
      .get(
        'https://twiddlen-api.herokuapp.com/user/weeklyEvents'
        //, { headers: {"Authorization" : `Bearer ${token}`} }
      )
      .then(res => {
        if (res.data.success === false) {
          alert(res.data.message);
        } else {
          //console.log(dat);
          console.log('here data is', res.data);
          this.setState({
            eventsData: res.data.events,
            loading: false
          });
          // this.setSlides();
        }
      })
      .catch(error => {
        alert('Internal Server error, Server Resopnded with "' + error + '"');
      });
  }

  // setSlides = () => {
  //   console.log('running');
  //   abc = [<EventCard
  //     image={
  //       'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV'
  //     }
  //     name={this.state.eventsData[0].name}
  //     city={this.state.eventsData[0].Address.city}
  //     organizerName={'Twiddlen'}
  //     timeAndDate={this.state.eventsData[0].Date.startDate.slice(0, 10)}
  //     description={this.state.eventsData[0].description}
  //     sponsor={this.state.eventsData[0].sponsor}
  //     category={this.state.eventsData[0].category}
  //   />,
  //   <EventCard
  //     image={
  //       'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV'
  //     }
  //     name={this.state.eventsData[0].name}
  //     city={this.state.eventsData[0].Address.city}
  //     organizerName={'Twiddlen'}
  //     timeAndDate={this.state.eventsData[0].Date.startDate.slice(0, 10)}
  //     description={this.state.eventsData[0].description}
  //     sponsor={this.state.eventsData[0].sponsor}
  //     category={this.state.eventsData[0].category}
  //   />,
  //  ]

  //   console.log(this.state.eventsData[0].name)
  // };

  onUpdateUser = event => {
    this.props.onUpdateUser(event.target.value);
  };

  render() {
    const { classes, ...rest } = this.props;

    var min = 1;
    var max = 10;
    let images = [];

    Object.values(this.state.eventsData).map((type, key) => {
      images.push(type.image);
      max = key;
      return null;
    });

    var rand = min + Math.floor(Math.random() * (max - min));

    let choosenImage = images[rand];
    let choosenFact = this.props.facts[rand];

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
        <LoadingScreen
          loading={this.state.loading}
          bgColor="black"
          spinnerColor="orange"
          textColor="white"
          logoSrc="https://clearlens.org/wp-content/uploads/2018/05/Facts.jpg"
          text={choosenFact}
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
              {/* <Grid item xs={12}>
              <Slide
                direction="down"
                timeout={1000}
                in={true}
                mountOnEnter
                unmountOnExit
              >
                <SearchBar />
              </Slide>
            </Grid> */}
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
                      <Link
                        component="button"
                        variant="display1"
                        onClick={() =>
                          this.props.history.push('/happeningtoday')
                        }
                        color="inherit"
                      >
                        <strong>Happening Today</strong>
                      </Link>
                    </div>
                    <div style={{ position: 'absolute', right: 2, bottom: 30 }}>
                      <AddEvent />
                    </div>
                  </Typography>
                </Grid>
                <Hidden smUp>
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Grid container spacing={0} justify="center">
                      <Grid item xs={12} sm={12} md={8} lg={5}>
                        <Carousel
                          slides={Object.values(this.state.eventsData).map(
                            (type, key) => {
                              return (
                                <LocalVibe
                                  image={type.cover}
                                  key={key}
                                  name={type.name}
                                  city={type.Address}
                                  organizerName={'Twiddlen'}
                                  timeAndDate={type.startDate}
                                  description={type.description}
                                  //sponsor={type.sponsor}
                                  category={type.category}
                                  history={this.props.history}
                                  client={this.props.client}
                                />
                              );
                            }
                          )}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Hidden>
                <Hidden xsDown>
                  <Grid item xs={12}>
                    <Slider {...settings}>
                      {Object.values(this.state.eventsData).map((type, key) => {
                        return (
                          <Grid container spacing={0} key={key}>
                            <Grid item xs={12} style={{ padding: '2%' }}>
                              <LocalVibe2
                                image={type.cover}
                                name={type.title}
                                city={type.Address}
                                organizerName={'Twiddlen'}
                                timeAndDate={type.startDate.slice(0, 10)}
                                description={type.description}
                                //sponsor={type.sponsor}
                                category={type.category}
                                history={this.props.history}
                                client={this.props.client}
                              />
                            </Grid>
                            <div style={{ padding: '10%' }} />
                          </Grid>
                        );
                      })}
                    </Slider>
                  </Grid>
                </Hidden>

                <Grid item xs={12}>
                  <Typography
                    variant="display1"
                    component="h4"
                    gutterBottom={true}
                    align="center"
                  >
                    <Link
                      component="button"
                      variant="display1"
                      onClick={() =>
                        this.props.history.push(
                          '/category-page/happeningthisweek'
                        )
                      }
                      color="inherit"
                    >
                      <strong>Happening This Week</strong>
                    </Link>
                  </Typography>
                </Grid>

                {/* <Grid item xs={12} md={12}>
                  <Grid container spacing={40} direction="row" justify="center" alignContent="center"> */}
                <Grid item xs={12}>
                  <Slider {...settings}>
                    {Object.values(this.state.eventsData).map((type, key) => {
                      return (
                        <Grid container spacing={0} key={key}>
                          <Grid item xs={12} style={{ padding: '2%' }}>
                            <LocalVibe2
                              image={type.cover}
                              name={type.name}
                              city={type.Address}
                              organizerName={'Twiddlen'}
                              timeAndDate={type.startDate.slice(0, 10)}
                              description={type.description}
                              //sponsor={type.sponsor}
                              category={type.category}
                              history={this.props.history}
                              client={this.props.client}
                            />
                          </Grid>
                          <div style={{ padding: '10%' }} />
                        </Grid>
                      );
                    })}
                  </Slider>
                </Grid>

                {/* </Grid>
                </Grid> */}

                {/* <Grid item xs={12}>
                <Typography
                  variant="display1"
                  component="h4"
                  gutterBottom={true}
                  align="center"
                >
                  <Link
                    component="button"
                    variant="display1"
                    onClick={() =>
                      this.props.history.push('/happening-thismonth')
                    }
                    color="inherit"
                  >
                    <strong>Happening This Month</strong>
                  </Link>
                </Typography>
              </Grid> */}

                {/* <Grid item xs={12} md={12}>
                <Grid container spacing={0}>
                  <Grid item xs={12}>
                    <Slider {...settings}>
                      {Object.values(this.state.eventsData).map((type, key) => {
                        return (
                          <Fade in={true} timeout={15000} key={key}>
                            <div className={classes.container}>
                              <LocalVibe2
                                image={
                                  'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV'
                                }
                                name={type.name}
                                city={type.Address.City}
                                organizerName={'Twiddlen'}
                                timeAndDate={type.Date.startDate.slice(0, 10)}
                                description={type.description}
                                sponsor={type.sponsor}
                                category={type.category}
                                history={this.props.history}
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
              </Grid> */}
                <Grid item xs={12}>
                  <Typography
                    variant="display1"
                    component="h4"
                    gutterBottom={true}
                    align="center"
                  >
                    <Link
                      component="button"
                      variant="display1"
                      onClick={() =>
                        this.props.history.push('/category-page/familyfun')
                      }
                      color="inherit"
                    >
                      <strong>Family Fun</strong>
                    </Link>
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="display1"
                    component="h4"
                    gutterBottom={true}
                    align="center"
                  >
                    <Link
                      component="button"
                      variant="display1"
                      onClick={() =>
                        this.props.history.push('/category-page/shopping')
                      }
                      color="inherit"
                    >
                      <strong>Shopping</strong>
                    </Link>
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="display1"
                    component="h4"
                    gutterBottom={true}
                    align="center"
                  >
                    <Link
                      component="button"
                      variant="display1"
                      onClick={() =>
                        this.props.history.push('/category-page/kidvibes')
                      }
                      color="inherit"
                    >
                      <strong>Kid Vibes</strong>
                    </Link>
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="display1"
                    component="h4"
                    gutterBottom={true}
                    align="center"
                  >
                    <Link
                      component="button"
                      variant="display1"
                      onClick={() =>
                        this.props.history.push('/category-page/realestate')
                      }
                      color="inherit"
                    >
                      <strong>Real Estate</strong>
                    </Link>
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="display1"
                    component="h4"
                    gutterBottom={true}
                    align="center"
                  >
                    <Link
                      component="button"
                      variant="display1"
                      onClick={() =>
                        this.props.history.push('/category-page/cityvibes')
                      }
                      color="inherit"
                    >
                      <strong>City Vibes</strong>
                    </Link>
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="display1"
                    component="h4"
                    gutterBottom={true}
                    align="center"
                  >
                    <Link
                      component="button"
                      variant="display1"
                      onClick={() =>
                        this.props.history.push('/category-page/specialvibes')
                      }
                      color="inherit"
                    >
                      <strong>Special Vibes</strong>
                    </Link>
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="display1"
                    component="h4"
                    gutterBottom={true}
                    align="center"
                  >
                    <Link
                      component="button"
                      variant="display1"
                      onClick={() =>
                        this.props.history.push('/category-page/streetfairs')
                      }
                      color="inherit"
                    >
                      <strong>Street Fairs</strong>
                    </Link>
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="display1"
                    component="h4"
                    gutterBottom={true}
                    align="center"
                  >
                    <Link
                      component="button"
                      variant="display1"
                      onClick={() =>
                        this.props.history.push('/category-page/garagesales')
                      }
                      color="inherit"
                    >
                      <strong>Garage Sales</strong>
                    </Link>
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="display1"
                    component="h4"
                    gutterBottom={true}
                    align="center"
                  >
                    <Link
                      component="button"
                      variant="display1"
                      onClick={() =>
                        this.props.history.push('//category-page/art')
                      }
                      color="inherit"
                    >
                      <strong>Art</strong>
                    </Link>
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography
                    variant="display1"
                    component="h4"
                    gutterBottom={true}
                    align="center"
                  >
                    <Link
                      component="button"
                      variant="display1"
                      onClick={() =>
                        this.props.history.push('/category-page/charity')
                      }
                      color="inherit"
                    >
                      <strong>Charity/Non Profit</strong>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </div>
        </LoadingScreen>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(state.vibesData);
  return {
    client: state.client,
    facts: state.facts
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
