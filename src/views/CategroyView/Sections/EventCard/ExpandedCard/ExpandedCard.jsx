import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/CustomButtons/Button.jsx';
import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const styles = {
  card: {
    maxWidth: 450,
    overflow: 'auto'
  },
  media: {
    height: 350
  }
};

class ResponsiveDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    // const { fullScreen } = this.props;
    const { classes } = this.props;

    return (
      <div>
        <Button color="warning" onClick={this.handleClickOpen}>
          Category Name
        </Button>
        <Dialog
          // fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          {/* <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle> */}
          {/* <DialogContent> */}
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="http://marketing4startups.co.uk/ImageEvents/wp-content/uploads/2016/02/event-management-placeholder.jpg"
              title="The Great Event"
            />
            <CardContent>
              <Grid container spacing={16}>
                <Grid item xs={6}>
                  <Grid container spacing={0} direction="column">
                    <Grid item xs={12}>
                      <Typography variant="body1">The Social Event</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography vairant="body1">Organizer Name</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={0} direction="column">
                    <Grid item xs={12}>
                      <Typography variant="body1">
                        Avg. Ticket Price 700
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">
                        Notify me about this
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={8} direction="row">
                    <Grid item xs={3}>
                      <Typography variant="body2">Kanses City</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2">300 Seatings</Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography variant="body2">
                        <small>26 January 2019: 9:00 AM</small>
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <strong>
                      <Divider />
                    </strong>
                  </Grid>
                </Grid>
              </Grid>
              <Typography component="p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </Typography>
              <Divider />
              <Grid container spacing={16}>
                <Grid item xs={3}>
                  <Typography variant="body2">Category 1</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body2">Category 1</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="body2">Category 1</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="caption">
                    <small>more</small>
                  </Typography>
                </Grid>
              </Grid>
              <Divider />
            </CardContent>
          </Card>
          {/* </DialogContent> */}
          {/* <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions> */}
        </Dialog>
      </div>
    );
  }
}

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};

export default withStyles(styles)(withMobileDialog()(ResponsiveDialog));
