/* eslint jsx-a11y/alt-text: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */

import React from 'react';
import { connect } from 'react-redux';

import Message from '../containers/message';
import initialState from '../index';

const MessageList = (props) => {
  return (
    <ul className="list-inline">
      <Message key={initialState.messages.content[props]} />
    </ul>
  );
};

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessageList);
