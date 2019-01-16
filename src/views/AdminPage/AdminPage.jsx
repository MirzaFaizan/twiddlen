import React, { Component } from 'react';
import SideBar from './SideBar/SideBar.jsx';

import {connect} from 'react-redux';
import AdminLogin from './AdminLogin.jsx'
class AdminPage extends Component {

    componentDidMount(){
        console.log(this.props.loggedIn
            )
    }
    loggedIN = () => {
        if(this.props.loggedIn){
            return <SideBar loggedIn={this.props.loggedIn}/>
        }
        else{
            return <AdminLogin/>
        }
    }
    render() {
        return(
            <div>
                {this.loggedIN()}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    console.log(state.admin)
    return ({ loggedIn:state.admin })
}
    

export default connect(mapStatetoProps)(AdminPage)