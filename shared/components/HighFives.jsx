import React from 'react';

export default React.createClass({


  render() {
    const { highfives } = this.props.params;

    return (
      <div>He will give you {highfives} high fives!</div>
    );
  }
});