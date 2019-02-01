import React from 'react';
// plugin that creates slider
import nouislider from 'nouislider';
class Sliders extends React.Component {
  componentDidMount() {
    nouislider.create(this.refs.slider1, {
      start: [40],
      connect: [true, false],
      step: 1,
      range: { min: 0, max: 100 }
    });
  }
  render() {
    return (
      <div>
        <div className="slider-warning" ref="slider1" />
        0-100
        <br />
      </div>
    );
  }
}
export default Sliders;
