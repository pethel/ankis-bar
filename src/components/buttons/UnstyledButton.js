import React from 'react';
import classnames from 'classnames';

import './UnstylesButton.css';

const UnstyledButton = (props) => (
  <button {...props} className={classnames('UnstyledButton', props.className)} />
);

export default UnstyledButton;
