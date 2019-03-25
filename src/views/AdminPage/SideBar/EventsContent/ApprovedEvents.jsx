import React from 'react';
import Table from 'components/Table/Table.jsx';
import Grid from '@material-ui/core/Grid';

import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CircularProgress from '@material-ui/core/CircularProgress';

import axios from 'axios';

export default class ApprovedEvents extends React.Component {
  componentDidMount() {
    axios
      .get(
        'https://twiddlen-api.herokuapp.com/admin/approvedEvents'
        //, { headers: {"Authorization" : `Bearer ${token}`} }
      )
      .then(res => {
        if (res.data.success === false) {
          alert(res.data.message);
        } else {
          //console.log(dat);
          this.setState({
            data: res.data.events,
            loading: false
          });
          console.log(this.state.data);
        }
      })
      .catch(error => {
        alert('Internal Server error, Server Resopnded with "' + error + '"');
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
      //t:this.props.token,
    };
  }

  render() {
    return this.state.loading ? (
      <div style={{ paddingTop: '25%', paddingLeft: '50%' }}>
        <CircularProgress color="secondary" />
      </div>
    ) : (
      <div>
        <Grid container spacing={0} style={{ paddingTop: '5%' }}>
          <Grid item xs={8} sm={8} md={12}>
            <Card>
              <CardHeader color="warning">
                <h4>Approved Events</h4>
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="info"
                  tableHead={[
                    'Name',
                    'Description',
                    'Category',
                    'Spaces',
                    'Start-Date',
                    'End-Date',
                    'Location',
                    'Zip',
                    'City',
                    'Address',
                    'Contact'
                  ]}
                  tableData={this.state.data.map(type => {
                    //console.log(type);
                    return [
                      type.title.toUpperCase(),
                      type.description,
                      type.category,
                      type.spaces,
                      type.startDate,
                      type.endDate,
                      type.Lat + ',' + type.Lng,
                      type.Zip.toString(),
                      type.city,
                      type.Address,
                      type.contact
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
