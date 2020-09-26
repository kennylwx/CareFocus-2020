import React from 'react';
import '../../styles/dashboard.scss';


function MessageBox({num}) {
  return (
    <div className="message-box">
      <div className="message-title">Hello Lydia!</div>
      <div className="message-text">{`You have ${num} more checkups left on your agenda!`}</div>
    </div>
  );
}

export default MessageBox;
