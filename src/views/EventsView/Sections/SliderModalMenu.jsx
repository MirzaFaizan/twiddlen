import React from 'react';
// import IconButton from '@material-ui/core/IconButton';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

import TextField from '@material-ui/core/TextField';

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];

class LongMenu extends React.Component {
  state = {
    currency: 'EUR'
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
          value={this.state.currency}
          onChange={this.handleChange('currency')}
          SelectProps={{
            native: true
          }}
          helperText="Please select your category"
          margin="dense"
          variant="outlined"
          fullWidth={true}
        >
          {currencies.map(option => (
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
