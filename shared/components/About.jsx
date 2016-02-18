import React, { Component } from 'react';

class About extends Component {

  render() {
    return (
      <div>
        <p>About things go here you</p>

        {this.props.children}
      </div>
    );
  }

}

export default About;