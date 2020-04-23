import React, { Component } from 'react';

class Icon extends Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
      >
        <g fill={this.props.color} fillRule="evenodd">
          <path
            fillRule="nonzero"
            d="M13 26C5.82 26 0 20.18 0 13S5.82 0 13 0s13 5.82 13 13-5.82 13-13 13zm0-2c6.075 0 11-4.925 11-11S19.075 2 13 2 2 6.925 2 13s4.925 11 11 11z"
          />
          <path d="M12 7h2v12h-2z" />
          <path d="M7 14v-2h12v2z" />
        </g>
      </svg>
    );
  }
}

Icon.propTypes = {};

export default Icon;
