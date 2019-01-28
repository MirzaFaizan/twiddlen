import React from 'react';
import {
  FloatingMenu,
  MainButton,
  ChildButton
} from 'react-floating-button-menu';
import MdAdd from '@material-ui/icons/Add';
import MdClose from '@material-ui/icons/Clear';
import MdFavorite from '@material-ui/icons/Favorite';

const styles = {
  position: 'absolute',
  bottom: 2,
  right: 2
};

class FloatingMenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div style={{ styles }}>
        <FloatingMenu
          slideSpeed={500}
          direction="up"
          spacing={20}
          isOpen={this.state.isOpen}
        >
          <MainButton
            iconResting={<MdAdd style={{ fontSize: 20 }} nativeColor="white" />}
            iconActive={
              <MdClose style={{ fontSize: 20 }} nativeColor="white" />
            }
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
      </div>
    );
  }
}

export default FloatingMenuItem;
