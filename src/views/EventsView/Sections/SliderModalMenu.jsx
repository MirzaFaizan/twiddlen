import React from 'react';
// import IconButton from '@material-ui/core/IconButton';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

import TextField from '@material-ui/core/TextField';

const categories = [
  {
    value: 'indoor',
    label: 'Indoor'
  },
  {
    value: 'outdoor',
    label: 'Outdoor'
  },
  {
    value: 'familyfun',
    label: 'Family Fun'
  },
  {
    value: 'shows',
    label: 'Shows'
  },
  {
    value: 'music',
    label: 'Music'
  },
  {
    value: 'car',
    label: 'Car'
  },
  {
    value: 'airplane',
    label: 'Airplane'
  },
  {
    value: 'motorcycles',
    label: 'Motorcycles'
  },
  {
    value: 'realestate',
    label: 'Real Estate'
  },
  {
    value: 'garagesales',
    label: 'Garage Sales'
  },
  {
    value: 'cityvibes',
    label: 'City Vibes'
  },
  {
    value: 'nonprofit',
    label: 'Non Profit'
  },
  {
    value: 'education',
    label: 'Education'
  },
  {
    value: 'school',
    label: 'School'
  },
  {
    value: 'gradeschool',
    label: 'Grade School'
  },
  {
    value: 'middleschool',
    label: 'Middle School'
  },
  {
    value: 'highschool',
    label: 'High School'
  },
  {
    value: 'sports',
    label: 'Sports'
  },
  {
    value: 'biking',
    label: 'Biking'
  },
  {
    value: 'rowing',
    label: 'Rowing'
  },
  {
    value: 'hiking',
    label: 'Hiking'
  },
  {
    value: 'bowling',
    label: 'Bowling'
  },
  {
    value: 'pool',
    label: 'Pool'
  },
  {
    value: 'airsoft',
    label: 'Airsoft'
  },
  {
    value: 'paintball',
    label: 'PaintBall'
  },
  {
    value: 'hockey',
    label: 'Hockey'
  },
  {
    value: 'soccer',
    label: 'Soccer'
  },
  {
    value: 'parks',
    label: 'Parks'
  },
  {
    value: 'water',
    label: 'Water'
  },
  {
    value: 'recreation',
    label: 'Recreation'
  },
  {
    value: 'amusement',
    label: 'Amusement'
  },
  {
    value: 'stateparks',
    label: 'State Parks'
  },
  {
    value: 'kidscalender',
    label: 'Kids Calender'
  },
  {
    value: 'Library',
    label: 'Library'
  },
  {
    value: 'meetup',
    label: 'Meet Up'
  },
  {
    value: 'lowincome',
    label: 'Low Income'
  },
  {
    value: 'assistance',
    label: 'Assistance'
  },
  {
    value: 'church',
    label: 'Church'
  },
  {
    value: 'salesvibes',
    label: 'Sales Vibes'
  },
  {
    value: 'mallvibes',
    label: 'Malls Vibes'
  },
  {
    value: 'specialvibes',
    label: 'Special Vibes'
  },
  {
    value: 'senior',
    label: 'Senior'
  },
  {
    value: 'music',
    label: 'Music'
  },
  {
    value: 'movie',
    label: 'Movie'
  },
  {
    value: 'businesseducation',
    label: 'Business Education'
  },
  {
    value: 'business',
    label: 'Business'
  },
  {
    value: 'nonprofit',
    label: 'Non-Profit'
  },
  {
    value: 'habitatsforhumanity',
    label: 'Habitats for Humanity'
  },
  {
    value: 'streetfairs',
    label: 'Street Fairs'
  },
  {
    value: 'facebookvibes',
    label: 'Facebook Vibes'
  }
];

class LongMenu extends React.Component {
  state = {
    category: 'indoor'
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Choose a Category"
          value={this.state.category}
          onChange={this.handleChange('category')}
          SelectProps={{
            native: true
          }}
          helperText="Please select your category"
          margin="dense"
          variant="outlined"
          fullWidth={true}
        >
          {categories.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    );
  }
}

export default LongMenu;
