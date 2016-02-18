import React from 'react';


export default React.createClass({
  render() {
    return (
      <div>
        <ul>
          <li>This is Carlos. He is cool. {this.props.children}</li>
        </ul>
      </div>
    );
  }
});