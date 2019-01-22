import React from 'react';

import Table from "components/Table/Table.jsx";
import Grid from '@material-ui/core/Grid'

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import Button from 'components/CustomButtons/Button.jsx';
import Add from '@material-ui/icons/Add';


const data={
    data1:[
        '1',
        'dakota rice',
        '36558',
        'Niger',
        'City',
        'Location',
        <Button justIcon round color="info" aria-label="Add" >
            <Add/>
        </Button>
    ],
    data2:[
        '2',
        'dakota rice',
        '36558',
        'Niger',
        'City',
        'Location',
        <Button justIcon round color="info" aria-label="Add" >
            <Add/>
        </Button>
    ],
    data3:[
        '3',
        'dakota rice',
        '36558',
        'Niger',
        'City',
        'Location',
        <Button justIcon round color="info" aria-label="Add" >
            <Add/>
        </Button>
    ],
    data4:[
        '4',
        'dakota rice',
        '36558',
        'Niger',
        'City',
        'Location',
        <Button justIcon round color="info" aria-label="Add" >
            <Add/>
        </Button>
    ],
}
export default class PendingEvents extends React.Component{
    render() {
        return(
            <div>
                <Grid container spacing={0}>
                    <Grid item xs={8} sm={8} md={12}>
                        <Card>
                            <CardHeader color='warning'>
                            <h4>Pending Events</h4>
                            </CardHeader>
                            <CardBody>
                                <Table
                                tableHeaderColor="info"
                                tableHead={["ID", "Name", "Salary", "Country","City","Location",'Add']}
                                tableData={ 
                                        Object.values(data).map((type,key)=>{
                                        console.log(type)
                                        return (type)
                                    }) 
                                }
                                />
                            </CardBody>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}