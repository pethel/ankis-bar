import React from 'react';
import {oneOf, string} from 'prop-types';
import classNames from 'classnames';

import './Hx.css';

const headers = ['h1', 'h2', 'h3'];

const Hx = ({level, lookLike, element: Element, className, ...rest}) => {
  const ElementToRender = Element || headers[level - 1];
  const headingClassName = lookLike ? `H${lookLike}` : `H${level}`;

  return (
    <ElementToRender className={classNames(headingClassName, className)}  {...rest}/>
  );
};

Hx.propTypes = {
  level: oneOf([1, 2, 3]),
  lookLike: oneOf([1, 2, 3]),
  className: string,
  element: string,
};

export default Hx;
