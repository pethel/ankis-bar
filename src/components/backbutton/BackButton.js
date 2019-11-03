import React from 'react';
import {Link} from 'react-router-dom';

import './BackButton.css'
import imgSrc from './backwards.svg';

const BackButton = ({children, to}) => (
  <Link className="BackButton" to={to}>
    <img src={imgSrc} alt=""/>
    {children}
  </Link>
);

export default BackButton;
