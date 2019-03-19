import React from 'react';
// import {
//   FloatingMenu
//   //   MainButton,
//   //   ChildButton
// } from 'react-floating-button-menu';
// import MdAdd from '@material-ui/icons/Add';
// import MdClose from '@material-ui/icons/Clear';
import EventDialog from './EventDialog/EventDialog.jsx';
// import MdFavorite from '@material-ui/icons/Favorite';

const styles = {
  position: 'sticky'
};

class FloatingMenuItem extends React.Component {
  render() {
    return (
      <div style={styles}>
        <EventDialog client={this.props.client} />
      </div>
    );
  }
}

export default FloatingMenuItem;
