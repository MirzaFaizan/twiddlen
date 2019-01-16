import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import GpsFixed from '@material-ui/icons/GpsFixed';

import GetLocation from './GetLocation.jsx';


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




class CustomizedInputBase extends React.Component  {

  constructor(props){
    super(props);

    this.getInnerRef = this.getInnerRef.bind(this);
    this.getLocation = this.getLocation.bind(this);
  }
  getInnerRef = (ref) => {
    this.innerRef = ref;
  }
  
  getLocation = () => {
    this.innerRef && this.innerRef.getLocation();
  }

  render () {
    const { classes } = this.props;

  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase className={classes.input} placeholder="ZIP / LOCATION" />
      {/* <IconButton className={classes.iconButton} aria-label="Directions" onClick={()=>console.log('Directions')}>
        <GpsFixed />
      </IconButton> */}
      <GetLocation ref={this.getInnerRef()}/>
      <IconButton className={classes.iconButton} onClick={this.getLocation()}>
      <GpsFixed />
      </IconButton>
      {/*<Divider className={classes.divider} />*/}
      <IconButton className={classes.iconButton2} aria-label="Search" onClick={()=>console.log('Search')}>
        GO
      </IconButton>
    </Paper>
  );
}
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputBase);
