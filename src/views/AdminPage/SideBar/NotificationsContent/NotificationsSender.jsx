import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from 'components/CustomButtons/Button.jsx';
import TextField from '@material-ui/core/TextField';
import Notifications, {notify} from 'react-notify-toast';

export default class NotificationsSender extends React.Component {

    constructor(props){
        super(props)

        this.state={
            message:'New Event Coming',
        }
    }

    handleChange = event => {
        this.setState({
          message:event.target.value,
        });
      };

    render() {
        let myColor = { background: '#0E1717', text: "#FFFFFF" }
        return (
            <Grid container justify='center' alignContent='flex-end' direction='row'>
                <Notifications options={{zIndex: 200, top: '50px'}} />
                <Grid item xs={12}>
                <TextField
                    id="outlined-multiline-static"
                    label="Notification message here!"
                    defaultValue="New Event Coming!"
                    onChange={e=>{this.handleChange(e)}}
                    multiline
                    row='4'
                    margin="normal"
                    variant="outlined"
                    fullWidth
                 />
                </Grid>
                <Grid item xs={6}>
                <TextField
                    id="outlined-multiline-static"
                    label="Notification message here!"
                    defaultValue="New Event Coming!"
                    onChange={e=>{this.handleChange(e)}}
                    margin="normal"
                    variant="outlined"
                 />
                </Grid>
                <Grid item xs={6}>
                <TextField
                    id="outlined-multiline-static"
                    label="Notification message here!"
                    defaultValue="New Event Coming!"
                    onChange={e=>{this.handleChange(e)}}
                    margin="normal"
                    variant="outlined"
                 />
                </Grid>
                <Grid item xs={12}>
                    <Button color='success' onClick={()=>notify.show(this.state.message,'success',5000,myColor)}>Send</Button>
                </Grid>
            </Grid>
        )
    }
}