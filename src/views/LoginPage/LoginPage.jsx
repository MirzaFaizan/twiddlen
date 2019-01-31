import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';

import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import axios from 'axios';
import loginPageStyle from 'assets/jss/material-kit-react/views/loginPage.jsx';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

import image2 from 'assets/img/twiddlen-bg-final.jpg';

import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      user: null,
      token: '',
      cardAnimaton: 'cardHidden',
      modal: false,
      email: '',
      password: ''
    };
    // we use this to make the card to appear after the page has been rendered
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  loginHandleClick = () => {
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post(
        'http://twiddlen-api.herokuapp.com/user/login',
        data
        //, { headers: {"Authorization" : `Bearer ${token}`} }
      )
      .then(res => {
        JSON.stringify(res);
        console.log(res.data);
        //Check if response reture suceess: true or false
        if (res.data.success === false) {
          alert(res.data.message);
        } else {
          //redirect to login component
          alert('Succesfully Logged in');
          this.handleClose('modal');
        }
      })
      .catch(error => {
        alert('Internal Server error, Server Resopnded with "' + error + '"');
      });
  };

  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }

  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: '' });
      }.bind(this),
      700
    );
  }
  googleResponse = res => {
    if (!res.w3.U3) {
      alert('Can not authenticte your google account');
    }
    const data = {
      name: res.w3.ig,
      email: res.w3.U3,
      provider_id: res.El,
      provider_pic: res.w3.Paa
    };
    // const token= res.Zi.access_token;
    // console.log(token);
    axios
      .post(
        'http://twiddlen-api.herokuapp.com/user/googleAuth',
        data
        //, { headers: {"Authorization" : `Bearer ${token}`} }
      )
      .then(res => {
        JSON.stringify(res);
        //Check if response reture suceess: true or false
        if (res.data.success === false) {
          alert(res.data.message);
        } else {
          //redirect to login component
          console.log(res.data);
          alert('Succesfully Logged in');
          this.handleClose('modal');
        }
      })
      .catch(error => {
        alert('Internal Server error, Server Resopnded with "' + error + '"');
      });
  };
  facebookResponse = res => {
    if (!res.email) {
      alert('Can not authenticte your facebook account');
    }
    let data = {
      name: res.name,
      email: res.email,
      provider_id: res.id,
      provider_pic: res.picture.data.url
    };
    //console.log(data);
    axios
      .post(
        'http://twiddlen-api.herokuapp.com/user/facebookAuth',
        data
        //, { headers: {"Authorization" : `Bearer ${token}`} }
      )
      .then(res => {
        JSON.stringify(res);
        //Check if response reture suceess: true or false
        if (res.data.success === false) {
          alert(res.data.message);
        } else {
          //redirect to login component
          console.log(res.data);
          alert('Succesfully Logged in');
          this.handleClose('modal');
        }
      })
      .catch(error => {
        alert('Internal Server error, Server Resopnded with "' + error + '"');
      });
  };
  onFailure = error => {
    alert(error);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          color="transparent"
          simple
          onClick={() => this.handleClickOpen('modal')}
        >
          Log IN
        </Button>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.state.modal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose('modal')}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description"
        >
          <div>
            <DialogContent
              style={{
                backgroundImage: 'url(' + image2 + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'top center'
              }}
            >
              <GridContainer justify="center">
                <GridItem xs={12} sm={10} md={10}>
                  <Card className={classes[this.state.cardAnimaton]}>
                    <form className={classes.form}>
                      <CardHeader
                        color="warning"
                        className={classes.cardHeader}
                      >
                        <h4>Login</h4>
                        <div className={classes.socialLine}>
                          <Button
                            justIcon
                            href="#pablo"
                            target="_blank"
                            color="transparent"
                            onClick={e => e.preventDefault()}
                          >
                            <i className={'fab fa-twitter'} />
                          </Button>

                          {
                            <FacebookLogin
                              appId="1693021777466367"
                              autoLoad={false}
                              render={renderProps => (
                                <i
                                  onClick={renderProps.onClick}
                                  className={'fab fa-facebook'}
                                />
                              )}
                              fields="name,email,picture"
                              callback={this.facebookResponse}
                            />
                          }

                          {
                            <GoogleLogin
                              clientId={
                                '213753292951-6nqr2q7p0n69sd4a29bvoch2gggedom8.apps.googleusercontent.com'
                              }
                              render={renderProps => (
                                <i
                                  style={{ margin: '5%' }}
                                  onClick={renderProps.onClick}
                                  className={'fab fa-google-plus-g'}
                                />
                              )}
                              onSuccess={this.googleResponse}
                              onFailure={this.onFailure}
                            />
                          }
                        </div>
                      </CardHeader>
                      <p className={classes.divider}>Or Be Classical</p>
                      <CardBody>
                        <CustomInput
                          labelText="Email..."
                          id="email"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            onChange: e => {
                              this.handleEmailChange(e);
                            },
                            type: 'email',
                            endAdornment: (
                              <InputAdornment position="end">
                                <Email className={classes.inputIconsColor} />
                              </InputAdornment>
                            )
                          }}
                        />
                        <CustomInput
                          labelText="Password"
                          id="pass"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            onChange: e => {
                              this.handlePasswordChange(e);
                            },
                            type: 'password',
                            endAdornment: (
                              <InputAdornment position="end">
                                <Icon className={classes.inputIconsColor}>
                                  lock_outline
                                </Icon>
                              </InputAdornment>
                            )
                          }}
                        />
                      </CardBody>
                      <CardFooter className={classes.cardFooter}>
                        <Button
                          simple
                          color="primary"
                          size="lg"
                          onClick={() => this.loginHandleClick()}
                        >
                          LOG IN
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                </GridItem>
              </GridContainer>
            </DialogContent>
          </div>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(loginPageStyle)(LoginPage);
