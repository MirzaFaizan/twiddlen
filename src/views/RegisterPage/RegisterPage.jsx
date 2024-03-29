import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
// core components
//import Header from "components/Header/Header.jsx";
//import HeaderLinks from "components/Header/HeaderLinks.jsx";
//import Footer from "components/Footer/Footer.jsx";
// import GridContainer from 'components/Grid/GridContainer.jsx';
// import GridItem from 'components/Grid/GridItem.jsx';
// import Grid from '@material-ui/core/Grid';
import Button from 'components/CustomButtons/Button.jsx';
import Card from '@material-ui/core/Card';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';

import loginPageStyle from 'assets/jss/material-kit-react/views/loginPage.jsx';
//import  GoogleLogin from 'react-google-login';
//import image2 from "assets/img/bg7.jpg";
// import image2 from 'assets/img/twiddlen-bg-final.jpg';
import axios from 'axios';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
// import DialogContent from '@material-ui/core/DialogContent';

import Typography from '@material-ui/core/Typography';

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

      userName: '',
      email: '',
      password: ''
    };
    // we use this to make the card to appear after the page has been rendered
  }

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

  handleUserNameChange = event => {
    this.setState({
      userName: event.target.value
    });
  };

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

  registerHandleClick = () => {
    console.log(this.state.userName);
    console.log(this.state.email);
    console.log(this.state.password);
    const data = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.userName
    };
    console.log(data);
    axios
      .post(
        'https://twiddlen-api.herokuapp.com/user/register',
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
          alert('Succesfully registered');
          this.handleClose('modal');
          if (this.props.handleClose) {
            console.log(this.props.handleClose);
            this.props.handleClose();
          }
        }
      })
      .catch(error => {
        alert(error || 'internal Server Error. try Again later');
      });
  };
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
    const tokenBlob = new Blob(
      [JSON.stringify({ access_token: res.accessToken }, null, 2)],
      { type: 'application/json' }
    );
    const options = {
      method: 'POST',
      body: tokenBlob
    };
    fetch('http://localhost:8000/api', options).then(r => {
      // const token = r.headers.get('x-auth-token');
      r.json().then(response => {
        console.log(response);
        if (this.props.handleClose) {
          console.log(this.props.handleClose);
          this.props.handleClose();
        }
      });
    });
  };

  onFailure = error => {
    alert(error);
  };

  render() {
    const { classes } = this.props;

    // const dialogSS={
    //   width:"25%",
    //   height:'100%',
    //   alignSelf:"center"
    // }
    return (
      <div>
        {/*
        <Header
          absolute
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        */}
        <div
        //   className={classes.pageHeader}
        //  style={{
        //    backgroundImage: "url(" + image2 + ")",
        //    backgroundSize: "cover",
        //    backgroundPosition: "top center"
        //   }}
        >
          <Button
            simple
            onClick={() => this.handleClickOpen('modal')}
            color="warning"
          >
            <Typography color="inherit" align="center">
              Register
            </Typography>
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
            {/* <div> */}
            {/* <DialogContent
                style={{
                  // backgroundImage: 'url(' + image2 + ')',
                  // backgroundSize: 'cover',
                  // backgroundPosition: 'top center',
                  backgroundColor:'transparent',
                }}
              > */}
            {/* <Grid container justify="center">
                  <Grid item xs={12} sm={12} md={12}> */}
            <Card
              className={classes[this.state.cardAnimaton]}
              style={{ maxWidth: 400 }}
            >
              <form className={classes.form}>
                <CardHeader color="warning" className={classes.cardHeader}>
                  <h4 style={{ paddingTop: '15px' }}>Register</h4>
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
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={e => e.preventDefault()}
                    >
                      <i className={'fab fa-facebook'} />
                    </Button>
                    {/* <Button
                          justIcon
                          target="_blank"
                          color="transparent"
                          onClick={() => this.googleAuthEvent()}
                        >
                          <i className={"fab fa-google-plus-g"} />
                        </Button> */}
                    {/* <GoogleLogin
                        clientId={'213753292951-6nqr2q7p0n69sd4a29bvoch2gggedom8.apps.googleusercontent.com'}
                        //buttonText="Login"
                        onSuccess={this.googleResponse}
                        onFailure={this.onFailure}
                    /> */}
                  </div>
                </CardHeader>
                <p className={classes.divider}>Register</p>
                <CardBody className={classes.cardbody}>
                  <CustomInput
                    labelText="User Name..."
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      onChange: e => {
                        this.handleUserNameChange(e);
                      },
                      type: 'text',
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
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
                    onClick={() => this.registerHandleClick()}
                  >
                    Register
                  </Button>
                </CardFooter>
              </form>
            </Card>
            {/* </Grid>
                </Grid> */}
            {/* </DialogContent> */}
            {/* </div> */}
          </Dialog>
          {/*</div>}
          {/*<Footer whiteFont />*/}
        </div>
      </div>
    );
  }
}
export default withStyles(loginPageStyle)(LoginPage);
