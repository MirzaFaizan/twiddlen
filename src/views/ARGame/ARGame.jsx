import React from 'react';

import Grid from '@material-ui/core/Grid';

class ARGame extends React.Component {
  render() {
    return (
      <Grid
        container
        spacing={0}
        justify="center"
        alignContent="center"
        alignItems="center"
        direction="column"
      >
        <div style={{ padding: '5%' }}>
          <img
            src="https://i.ytimg.com/vi/U49xMH-tVAQ/maxresdefault.jpg"
            alt="ARGame"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Grid>
    );
  }
}

export default ARGame;
