import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import ConferenceandSeminar from '@material-ui/icons/ContactMail';
import CastForEducation from "@material-ui/icons/CastForEducation";
import Games from "@material-ui/icons/Games";
import Home from "@material-ui/icons/Home"
import Music from "@material-ui/icons/MusicNote"
import Group from "@material-ui/icons/Group";
import Sports from "@material-ui/icons/DirectionsBike";
import Arts from "@material-ui/icons/FilterHdr";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";



class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Explore the Events in your Area</h2>
            {/*
              <h5 className={classes.description}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn't scroll to get here. Add a button if you want
              the user to see more.
            </h5>
            */}
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Conferene & Seminars"
                description=""
                icon={ConferenceandSeminar}
                iconColor="gray"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Social Gatherings"
                description=""
                icon={Group}
                iconColor="gray"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Real Estate | Buy/Sell"
                description=""
                icon={Home}
                iconColor="gray"
                vertical
              /> 
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Music"
                description=""
                icon={Music}
                iconColor="gray"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Art & Culture"
                description=""
                icon={Arts}
                iconColor="gray"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Sports"
                description=""
                icon={Sports}
                iconColor="gray"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Fun & Games"
                description=""
                icon={Games}
                iconColor="gray"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Education"
                description=""
                icon={CastForEducation}
                iconColor="gray"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
