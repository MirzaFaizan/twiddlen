import React from 'react';
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons

// core components
import Header from 'components/Header/Header.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
// import GridItem from 'components/Grid/GridItem.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';

import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';
// Sections for this page

// import SearchBar from './Sections/SearchBar.jsx';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/users-action.js';

import EventCard from './Sections/EventCard/EventCard.jsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// import FloatingMenu from '../FloatingMenu/FloatingMenu.jsx';

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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgLZs6BAPfLl4cmxCrU0QnItdBOLmFoux-fOt43Xa7ktbtXmvZ',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    categoryName: 'sports'
  },
  event2: {
    image:
      'https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,h_600,q_50,w_1400/v1/clients/virginiabeachva/144_3_1707_jpeg_55eee7dc-c6ef-41f7-b7b4-23bf044e565a.jpg',
    name: 'Event 2',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://brandongaille.com/wp-content/uploads/2013/08/Adidas-Company-Logo.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    categoryName: 'sports'
  },
  event3: {
    image:
      'https://www.gevme.com/blog/wp-content/uploads/2016/12/wsi-imageoptim-event-photographer-reportage-documentary-photography-westfest-2012_21-1.jpg',
    name: 'Event 3',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://upload.wikimedia.org/wikipedia/commons/0/0f/Pepsi_logo_2014.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    categoryName: 'sports'
  },
  event4: {
    image:
      'http://www.bvidestinationmanagement.com/wp-content/uploads/2018/03/Event-Management.jpeg',
    name: 'Event 4',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor: 'https://fontmeme.com/images/McDonald%E2%80%99s-Logo.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    categoryName: 'sports'
  },
  event5: {
    image: 'http://orientindia.com/admin//130/evt_photo/3_event_management.jpg',
    name: 'Event 5',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://vignette.wikia.nocookie.net/logopedia/images/6/63/Pizza_Hut_2012_logo.png/revision/latest?cb=20140507122847',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    categoryName: 'sports'
  },
  event6: {
    image:
      'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2018/02/00-event-table.jpg?itok=-nkXo5O-&fc=50,50',
    name: 'Event 6',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://www.logodesignlove.com/images/evolution/7up-logo-old-01.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    categoryName: 'sports'
  },
  event7: {
    image:
      'http://marketing4startups.co.uk/ImageEvents/wp-content/uploads/2016/02/event-management-placeholder.jpg',
    name: 'Event 7',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://www.businessinsider.com/image/53d29d5c6bb3f7a80617ada8-1200-924/nike-logo.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    categoryName: 'sports'
  },
  event8: {
    image:
      'https://images.yourstory.com/2015/03/yourstory_AppFriday_EventsHigh.jpg',
    name: 'Event 8',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://cdn.thingiverse.com/renders/08/c8/e7/c0/45/5d54f02a5fb2246c3058171b3dd19f1b_preview_featured.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    categoryName: 'sports'
  },
  event9: {
    image:
      'https://cdn.zuerich.com/sites/default/files/styles/sharing/public/web_zuerich_home_topevents_1600x900.jpg?itok=NI4hhrwV',
    name: 'Event 9',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://di-uploads-pod4.dealerinspire.com/rivercityhyundai/uploads/2017/05/HyundaiLogoStacked_4cblk-1024x659.gif',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    categoryName: 'sports'
  },
  event10: {
    image: 'http://361degreeevents.com/wp-content/uploads/2016/04/event3.jpg',
    name: 'Event 10',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Chevrolet_logo.svg/1200px-Chevrolet_logo.svg.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    categoryName: 'sports'
  },
  event11: {
    image:
      'https://www.sydneyoperahouse.com/content/dam/soh/visit-us/cross-sells/generic-what%27s-on/_CH_NEW_CROSS_SELL_1600x1067.jpg',
    name: 'Event 11',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://www.logodesignlove.com/images/evolution/7up-logo-old-01.jpg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    categoryName: 'music'
  },
  event12: {
    image:
      'https://www.universalorlando.com/webdata/k2/en/us/files/Images/universal-rock-the-universe-music-notes-c.jpg',
    name: 'Event 12',
    city: 'Kanses City',
    organizerName: 'Big John McCarty.',
    timeAndDate: '9AM, 20 July 2020',
    sponsor:
      'https://upload.wikimedia.org/wikipedia/commons/0/0f/Pepsi_logo_2014.svg',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industr  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an",
    categoryName: 'music'
  }
};
class CategoryView extends React.Component {
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
          <GridContainer
            style={divText}
            spacing={8}
            className={classes.container}
          >
            {/* <GridItem style={divText} xs={12} sm={12} md={6}>
              <SearchBar />
            </GridItem> */}
          </GridContainer>
        </div>
        <div>
          <div style={{ backgroundColor: 'lightgrey', padding: 20 }}>
            <Grid container spacing={40}>
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

              {Object.values(eventsData).map((type, key) => {
                if (type.categoryName === this.props.match.params.id) {
                  return (
                    <Grid item xs={12} sm={4} md={3} key={key}>
                      <EventCard
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
                } else {
                  return null;
                }
              })}

              <Grid item xs={12}>
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  justify="flex-end"
                  alignContent="flex-end"
                  alignItems="flex-end"
                >
                  {/* <Grid item xs={12}>
                    <FloatingMenu style={{ styles }} />
                  </Grid> */}
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
)(withStyles(landingPageStyle)(CategoryView));
