import React from 'react';

import initialState from '../index';

const Message = (props) => {
  return (
    <li className="list-inline">
      {initialState.messages.content[props]};
    </li>
  );
};

export default (Message);
