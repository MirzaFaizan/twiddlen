import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

export default class StatsCard extends React.Component{

    render() {
        return(
            <Grid container spacing={40} 
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={12} sm={6} md={6} lg={3}>
            <Card style={{width: "auto"}}>
            <CardHeader color="warning" >
            Events Registered
            </CardHeader>
            <CardBody>
                100/150 <small>Events Registered</small>
            </CardBody>
            </Card>
             </Grid>
             <Grid item xs={12} sm={6}  md={6} lg={3}>
             <Card style={{width: "auto"}}>
             <CardHeader color="success">Users</CardHeader>
             <CardBody>
             <p>Users Registered</p>
             </CardBody>
             </Card>
             </Grid>
             <Grid item xs={12} sm={6}  md={6} lg={3}>
             <Card style={{width: "auto"}}>
             <CardHeader color="danger">Events Pending</CardHeader>
             <CardBody>
             <p>102 events pending</p>
             </CardBody>
             </Card>
             </Grid>
             <Grid item xs={12} sm={6}  md={6} lg={3}>
             <Card style={{width: "auto"}}>
             <CardHeader color="info">People Interested</CardHeader>
             <CardBody>
             <p>600 People</p>
             </CardBody>
             </Card>
             </Grid>
            </Grid>
        )
    }
}