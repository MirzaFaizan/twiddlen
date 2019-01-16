import React from 'react';
// import Table from "components/Table/Table.jsx";
import Grid from '@material-ui/core/Grid'

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

// import Button from 'components/CustomButtons/Button.jsx';
// import Add from '@material-ui/icons/Add';


export default class ApprovedEvents extends React.Component{
    render() {
        return(
            <div>
                <Grid container spacing={0}>
                    <Grid iitem xs={8} sm={8} md={12}>
                        <Card>
                            <CardHeader color='warning'>
                            <h4>Post Events</h4>
                            </CardHeader>
                            <CardBody>
                               
                            </CardBody>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}