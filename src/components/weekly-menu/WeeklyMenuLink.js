import React from 'react';
import {Link} from 'react-router-dom';
import isThisWeek from 'date-fns/isThisWeek';

import WeeklyMenuContext from './WeeklyMenuContext';

const WeeklyMenuLink = ({children}) => (
  <WeeklyMenuContext.Consumer>
    {({isLoading, week}) => !isLoading && isThisWeek(new Date(week)) && (
      <Link to="/dagens">{children}</Link>
    )}
  </WeeklyMenuContext.Consumer>
);

export default WeeklyMenuLink;
