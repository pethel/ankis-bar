import React from 'react';
import classNames from 'classnames';

import './VisuallyHidden.css';

const VisuallyHidden = ({className, element: Element, ...rest}) => (
  <Element className={classNames(className, 'VisuallyHidden')} {...rest} />
);

VisuallyHidden.defaultProps = {
  element: 'span',
};

export default VisuallyHidden;
