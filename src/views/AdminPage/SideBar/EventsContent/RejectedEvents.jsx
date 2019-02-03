import React from 'react';

import Table from 'components/Table/Table.jsx';
import Grid from '@material-ui/core/Grid';

import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import axios from 'axios';

export default class RejectedEvents extends React.Component {
  componentDidMount() {
    axios
      .get(
        'https://twiddlen-api.herokuapp.com/admin/rejectedEvents'
        //, { headers: {"Authorization" : `Bearer ${token}`} }
      )
      .then(res => {
        if (res.data.success === false) {
          alert(res.data.message);
        } else {
          //console.log(dat);
          this.setState({
            data: res.data.events
          });
        }
      })
      .catch(error => {
        alert('Internal Server error, Server Resopnded with "' + error + '"');
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      data: []
      //t:this.props.token,
    };
  }

  render() {
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={8} sm={8} md={12}>
            <Card>
              <CardHeader color="warning">
                <h4>Rejected Events</h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="info"
                  tableHead={[
                    'Name',
                    'Description',
                    'start-Date',
                    'end-Date',
                    'Location',
                    'City',
                    'streetAddress'
                  ]}
                  tableData={this.state.data.map(type => {
                    //console.log(type);
                    return [
                      type.name,
                      type.description,
                      type.Date.startDate,
                      type.Date.endDate,
                      type.Address.locationAddress,
                      type.Address.City,
                      type.Address.streetAddress
                    ];
                  })}
                />
              </CardBody>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
