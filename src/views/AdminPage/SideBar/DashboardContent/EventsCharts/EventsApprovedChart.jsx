import React from 'react';
import ChartistGraph from 'react-chartist';
import 'chartist/dist/chartist.css';
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";


class Pie extends React.Component {
    render() {
        
      const textStyle={
          textAlign:'center'
      }

      
      var data = {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [
          [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
        ]
      };
   
      var options = {
        high: 10,
        low: -10,
        axisX: {
          labelInterpolationFnc: function(value, index) {
            return index % 2 === 0 ? value : null;
          }
        }
      };
   
      var type = 'Bar'
   
      return (
        <div>
          <Card style={{width: "auto"}}>
          <CardHeader color="warning"><ChartistGraph data={data} options={options} type={type} /></CardHeader>
          <CardBody>
          <p style={textStyle}>Events Approved</p>
          </CardBody>
          </Card>
        </div>
      )
    }
  }


  export default Pie;