import React, { Component } from 'react';

import Avatar from '../../../asserts/avatar.svg';

export default class DirectDetail extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="detail-item">
        <div>
          <div className="image float-left">
            <img className="avatar" src={Avatar} alt="Avatar" />
          </div>
          <span className="name float-left">0xa3b43df9kjlfklsafh</span>
          <div className="clear" />
        </div>
        <div className="detail-item_text">
          <div className="text">Open-Orders</div>
          <div className="detail-item_text_content">none yet</div>
        </div>
      </div>
    );
  }
}
