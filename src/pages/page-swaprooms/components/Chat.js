import React from 'react';
import TypeMessage from './TypeMessage';
import HistoryMessage from './HistoryMessage';

const Chat = props => {
  return (
    <div className="layout-body d-flex flexItem border-top">
      <main className="layout-body_middle flexItem whiteBackground main order-2">
        <div className="mesgs">
          <HistoryMessage />
          <TypeMessage />
        </div>
      </main>
    </div>
  );
};

export default Chat;
