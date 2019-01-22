import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// import { Redirect } from 'react-router';
import { connect } from 'react-redux'
// import AdminPage from './AdminPage.jsx'

import { updateAdmin } from '../../actions/admin-action.js'
import { bindActionCreators } from 'redux';

class AdminLogin extends React.Component {
    
    
    constructor(props){
        super(props);
    
        this.state={
            // redirect:false,
            email:'',
            password:'',
            error:false
        }
    }

            adminLoginResponse = () => { 
          
            };
            handleEmailChange = event => {
                this.setState({
                email:event.target.value,
                });
            };
            handlePasswordChange = event => {
                this.setState({
                password:event.target.value,
                });
            };
            buttonClick = () => {
                    if(this.state.email==='abc' && this.state.password==='123')
                    {
                        (this.props.onUpdateAdmin(true))
                                this.setState({
                                error:false,
                            })
                    }
                    else{
                        this.setState({
                                error:true
                                    })
                    }
            }

            render() { 
            const cardStyle = {
                maxWidth: 345,
            }
            const itemsAlign = {
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                            }
            
                // if(this.state.redirect){
                //     return (<Redirect to='/admin-page' Component={AdminPage}/>)
                // }
                return (   
                <Grid  style={itemsAlign} container alignItems='center' justify='center' direction='column-reverse'>
                <Grid item xs={12} sm={12} md={12}>
                <Card style={cardStyle}>
                    <CardContent>
                        <TextField
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                        variant="outlined"
                        onChange={e=>{this.handleEmailChange(e)}}
                        fullWidth
                        error={this.state.error}
                        />
                        <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={e=>{this.handlePasswordChange(e)}}
                        fullWidth
                        error={this.state.error}
                        />
                    </CardContent>
                    <CardActions>
                    <Button outlined size="small" color="primary" onClick={()=>this.buttonClick()}>
                        Sign In
                    </Button>
                    </CardActions>
                </Card>
                </Grid>
                </Grid>
        )
    }
}

const mapStatetoProps = (state) => {
    
    return (
        { loggedIn:state.admin }

    )
}

const mapActionsToProps = (dispatch,props) => {
    console.log(props)
    return bindActionCreators({
      onUpdateAdmin:updateAdmin
    },dispatch);  
  }

export default connect(mapStatetoProps,mapActionsToProps)(AdminLogin)