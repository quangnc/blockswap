import React, { Component } from 'react';

import Send from '../../../asserts/icon-send.svg';

class TypeMessage extends Component {
  render() {
    return (
      <div className="type-msg">
        <div className="type-msg_write">
          <input
            type="text"
            className="disable-outline"
            placeholder="Enter message here.."
          />
          <button className="type-msg_btn disable-outline" type="button">
            <img src={Send} alt="Send" />
          </button>
        </div>
      </div>
    );
  }
}

TypeMessage.propTypes = {};

export default TypeMessage;
