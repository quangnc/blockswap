import React, { Component } from 'react';
import Send from '../../../asserts/market-send.svg';
import Transform from '../../../asserts/market-transform.svg';
import Receive from '../../../asserts/market-receive.svg';

class Market extends Component {
  render() {
    return (
      <div className="market">
        <div className="market_content">
          <div className="float-left left market_content_cri">
            <span className="send">SEND</span>
            <img src={Send} alt="incoming-msg" />
            <span className="text">0.2</span>
            <span>RTH</span>
          </div>
          <div className="mid float-left">
            <img src={Transform} alt="incoming-msg" />
          </div>
          <div className="float-left right market_content_cri">
            <span className="send">SEND</span>
            <img src={Receive} alt="incoming-msg" />
            <span className="text">0.2</span>
            <span>RTH</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Market;
