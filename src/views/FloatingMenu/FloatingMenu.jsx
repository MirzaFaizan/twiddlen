import React from 'react';
import {
  FloatingMenu,
  MainButton,
  ChildButton
} from 'react-floating-button-menu';
import MdAdd from '@material-ui/icons/Add';
import MdClose from '@material-ui/icons/Clear';
import MdFavorite from '@material-ui/icons/Favorite';

export default class FloatingMenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <FloatingMenu
        slideSpeed={500}
        direction="up"
        spacing={50}
        isOpen={this.state.isOpen}
      >
        <MainButton
          iconResting={<MdAdd style={{ fontSize: 20 }} nativeColor="white" />}
          iconActive={<MdClose style={{ fontSize: 20 }} nativeColor="white" />}
          backgroundColor="black"
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
          size={40}
        />
        <ChildButton
          icon={<MdFavorite style={{ fontSize: 20 }} nativeColor="black" />}
          backgroundColor="white"
          size={40}
          onClick={() => console.log('First button clicked')}
        />
        <ChildButton
          icon={<MdFavorite style={{ fontSize: 20 }} nativeColor="black" />}
          backgroundColor="white"
          size={40}
        />
        <ChildButton
          icon={<MdFavorite style={{ fontSize: 20 }} nativeColor="black" />}
          backgroundColor="white"
          size={40}
        />
      </FloatingMenu>
    );
  }
}
