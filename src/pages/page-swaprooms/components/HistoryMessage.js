import React, { Component } from 'react';
import Avatar from '../../../asserts/avatar.svg';

class HistoryMessage extends Component {
  render() {
    return (
      <div className="msg_history">
        <div className="incoming-msg">
          <div className="incoming-msg_img">
            <img src={Avatar} alt="incoming-msg" />
          </div>
          <div className="incoming-msg_info">
            <div className="incoming-msg_info--username">
              0x23f32fjkh78yfs..
            </div>
            <div className="incoming-msg_info--list">
              <p>Sorry I don’t</p>
              <p>I’ll send you the offer now..</p>
            </div>
          </div>
        </div>

        <div className="outgoing-msg">
          <div className="outgoing-msg--list">
            <p>ahh I actually have a gen3 with ...</p>
          </div>
        </div>

        <div className="incoming-msg">
          <div className="incoming-msg_img">
            <img src={Avatar} alt="incoming-msg" />
          </div>
          <div className="incoming-msg_info">
            <div className="incoming-msg_info--username">
              0x23f32fjkh78yfs..
            </div>
            <div className="incoming-msg_info--list">
              <p>Sorry I don’t</p>
              <p>middle message test....</p>
              <p>I’ll send you the offer now..</p>
            </div>
          </div>
        </div>

        <div className="msg_history--time">12:23 PM</div>

        <div className="outgoing-msg">
          <div className="outgoing-msg--list">
            <p>
              ahh I actually have a gen3 with emerald eyes. Can pass it to you
              for 50 Dai.. Interested?
            </p>
          </div>
        </div>

        <div className="incoming-msg">
          <div className="incoming-msg_img">
            <img src={Avatar} alt="incoming-msg" />
          </div>
          <div className="incoming-msg_info">
            <div className="incoming-msg_info--username">
              0x23f32fjkh78yfs..
            </div>
            <div className="incoming-msg_info--list">
              <p>Sorry I don’t</p>
              <p>middle message test....</p>
              <p>I’ll send you the offer now..</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HistoryMessage.propTypes = {};

export default HistoryMessage;
