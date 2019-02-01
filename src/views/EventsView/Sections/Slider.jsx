import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 150,
    height: 100
  },
  slider: {
    padding: '11px 0px',
    color: 'orange'
  }
};

class SimpleSlider extends React.Component {
  state = {
    value: 30
  };

  handleChange = (event, value) => {
    var rounded = Math.floor(value);
    this.setState({ rounded, value });
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Typography id="label">Select your Radius</Typography>
        <Slider
          classes={{ container: classes.slider }}
          value={value}
          aria-labelledby="label"
          onChange={this.handleChange}
        />
        <Typography variant="caption" component="div">
          0-
          {this.state.rounded}
        </Typography>
      </div>
    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSlider);
