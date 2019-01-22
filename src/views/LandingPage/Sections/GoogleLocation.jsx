import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location' 
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
 
 
const API_KEY = 'API_KEY_FROM_GOOGLE'  
const styles = {
  root: {
    padding: '0px 0px 1px 0px',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    borderRadius:'25px'
  },
  input: {
    marginLeft: 20,
    flex: 1,
  },
  iconButton2: {
    padding: 12,
    backgroundColor:'orange',
    fontSize:'1rem'
  },
  iconButton: {
    padding: 10,
    fontSize:'1rem',
    color:"orange" 
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

class HomeComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      place: null,
    };
  }
 
  render() {
    const { classes } = this.props;
    return (
      <div >
         <GoogleComponent
          apiKey={API_KEY}
          language={'en'}
          country={'country:us'}
          coordinates={true}
          locationBoxStyle={classes.root}
          // locationListStyle={'custom-style-list'}
          // onChange={(e) => { this.setState({ place: e })  }} />
          onChange={(e) => console.log(e)} />
      </div>
 
    )
  } 
}
 
HomeComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(HomeComponent);
 