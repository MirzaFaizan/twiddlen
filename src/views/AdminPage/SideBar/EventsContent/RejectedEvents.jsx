import React from 'react';

import Table from "components/Table/Table.jsx";
import Grid from '@material-ui/core/Grid'

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import Button from 'components/CustomButtons/Button.jsx';
import Add from '@material-ui/icons/Add';

export default class RejectedEvents extends React.Component{
    render() {
        return(
            <div>
                <Grid container spacing={0}>
                    <Grid item xs={8} sm={8} md={12}>
                        <Card>
                            <CardHeader color='warning'>
                            <h4>Rejected Events</h4>
                            </CardHeader>
                            <CardBody>
                                <Table
                                tableHeaderColor="info"
                                tableHead={["ID", "Name", "Salary", "Country","City","Location",'Add']}
                                tableData={[
                                    ["1", "Dakota Rice", "$36,738", "Niger","City1","Location",
                                    <Button justIcon round color="info" aria-label="Add" >
                                    <Add/>
                                    </Button>],
                                    ["2", "Minerva Hooper", "$23,789", "Curaçao","City2","Location",
                                    <Button justIcon round color="info" aria-label="Add" >
                                    <Add/>
                                    </Button>],
                                    ["3", "Sage Rodriguez", "$56,142", "Netherlands","City3","Location",
                                    <Button justIcon round color="info" aria-label="Add" >
                                    <Add/>
                                    </Button>],
                                    ["4", "Philip Chaney", "$38,735", "Korea, South","City4","Location",
                                    <Button justIcon round color="info" aria-label="Add" >
                                    <Add/>
                                    </Button>]
                                        ]}
                                />
                            </CardBody>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}