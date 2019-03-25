import React from 'react';

import Table from 'components/Table/Table.jsx';
import Grid from '@material-ui/core/Grid';

import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import Button from '@material-ui/core/Button';

import axios from 'axios';

export default class PendingEvents extends React.Component {
  componentDidMount() {
    axios
      .get(
        'https://twiddlen-api.herokuapp.com/admin/pendingEvents'
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
  changeStatus = (id, flag) => {
    var data = {
      id: id,
      approval: flag
    };
    axios
      .post(
        'https://twiddlen-api.herokuapp.com/admin/approveEvent',
        data
        //, { headers: {"Authorization" : `Bearer ${token}`} }
      )
      .then(res => {
        if (res.data.success === false) {
          alert(res.data.message);
        } else {
          // alert(res.data.message);
          this.componentDidMount();
        }
      })
      .catch(error => {
        alert('Internal Server error, Server Resopnded with "' + error + '"');
      });
  };
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
        <Grid container spacing={0} style={{ paddingTop: '5%' }}>
          <Grid item xs={8} sm={8} md={12}>
            <Card>
              <CardHeader color="warning">
                <h4>Pending Events</h4>
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
                    //'Approve/Reject'
                  ]}
                  tableData={this.state.data.map(type => {
                    //console.log(type);
                    return [
                      type.name,
                      type.description,
                      // type.Date.startDate,
                      // type.Date.endDate,
                      type.Address.locationAddress,
                      type.Address.City,
                      type.Address.streetAddress,
                      <Button
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={() => {
                          this.changeStatus(type._id, 1);
                        }}
                      >
                        Approve
                      </Button>,
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                        onClick={() => {
                          this.changeStatus(type._id, -1);
                        }}
                      >
                        Reject
                      </Button>
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
