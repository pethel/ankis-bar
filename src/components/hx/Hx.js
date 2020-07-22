import React from 'react';
import {oneOf, string} from 'prop-types';

import './Hx.css';

const headers = ['h1', 'h2', 'h3'];

const Hx = ({level, lookLike, element: Element, ...rest}) => {
  const ElementToRender = Element || headers[level - 1];
  const className = lookLike ? `H${lookLike}` : `H${level}`;

  return (
    <ElementToRender className={className}  {...rest}/>
  );
};

Hx.propTypes = {
  level: oneOf([1, 2, 3]),
  lookLike: oneOf([1, 2, 3]),
  element: string,
};

export default Hx;
