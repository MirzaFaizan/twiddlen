import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
//import Header from "components/Header/Header.jsx";
//import HeaderLinks from "components/Header/HeaderLinks.jsx";
//import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
//import  GoogleLogin from 'react-google-login';
//import image2 from "assets/img/bg7.jpg";
import image2 from "assets/img/twiddlen-bg-final.jpg";

import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";


function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false, user: null, token: ''};
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      modal:false,
    };
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


  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700 );
  }
  googleResponse = (res) => { 
    const tokenBlob = new Blob([JSON.stringify({access_token: res.accessToken}, null, 2)], {type : 'application/json'});
    const options = {
      method: 'POST',
      body: tokenBlob
  };
  fetch('http://localhost:8000/api', options).then(r => {
      // const token = r.headers.get('x-auth-token');
      r.json().then(response => {
      console.log(response);
      });
  })
 };


  onFailure = (error) => {
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
         color="transparent" simple 
         onClick={() => this.handleClickOpen("modal")}>
         Log IN
         </Button>
          <Dialog
          //  style={{
          //   backgroundImage: "url(" + image2 + ")",
          //   backgroundSize: "cover",
          //   backgroundPosition: "top center"
          //  }}
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.state.modal}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.handleClose("modal")}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description">
          <div>
            <DialogContent style={{
            backgroundImage: "url(" + image2 + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
           }}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={10} md={8}  >
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="warning" className={classes.cardHeader}>
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button
                          justIcon
                          href="#pablo"
                          target="_blank"
                          color="transparent"
                          onClick={e => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"} />
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
                    <p className={classes.divider}>Or Be Classical</p>
                    <CardBody>
                      <CustomInput
                        labelText="First Name..."
                        id="first"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
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
                          type: "email",
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
                          type: "password",
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
                      <Button simple color="primary" size="lg">
                        Get started
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
            </DialogContent>
            </div>
            </Dialog>
          {/*</div>}
          {/*<Footer whiteFont />*/}
      </div>
      </div>
    );
  }
}
export default withStyles(loginPageStyle)(LoginPage);
