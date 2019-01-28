import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import ConferenceandSeminar from '@material-ui/icons/ContactMail';
import CastForEducation from '@material-ui/icons/CastForEducation';
import Games from '@material-ui/icons/Games';
import Home from '@material-ui/icons/Home';
import Music from '@material-ui/icons/MusicNote';
import Group from '@material-ui/icons/Group';
import Sports from '@material-ui/icons/DirectionsBike';
import Arts from '@material-ui/icons/FilterHdr';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import InfoArea from 'components/InfoArea/InfoArea.jsx';

import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx';

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Explore the Events in your Area</h2>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <div onClick={() => this.props.history.push('/category-page')}>
                <InfoArea
                  title="Conferene & Seminars"
                  description=""
                  icon={ConferenceandSeminar}
                  iconColor="gray"
                  vertical
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <div onClick={() => console.log('socail gatherings')}>
                <InfoArea
                  title="Social Gatherings"
                  description=""
                  icon={Group}
                  iconColor="gray"
                  vertical
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <div onClick={() => console.log('real estate')}>
                <InfoArea
                  title="Real Estate | Buy/Sell"
                  description=""
                  icon={Home}
                  iconColor="gray"
                  vertical
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <div onClick={() => console.log('music')}>
                <InfoArea
                  title="Music"
                  description=""
                  icon={Music}
                  iconColor="gray"
                  vertical
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <div onClick={() => console.log('arts')}>
                <InfoArea
                  title="Art & Culture"
                  description=""
                  icon={Arts}
                  iconColor="gray"
                  vertical
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <div onClick={() => console.log('sports')}>
                <InfoArea
                  title="Sports"
                  description=""
                  icon={Sports}
                  iconColor="gray"
                  vertical
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <div onClick={() => console.log('games')}>
                <InfoArea
                  title="Fun & Games"
                  description=""
                  icon={Games}
                  iconColor="gray"
                  vertical
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <div onClick={() => console.log('education')}>
                <InfoArea
                  title="Education"
                  description=""
                  icon={CastForEducation}
                  iconColor="gray"
                  vertical
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
