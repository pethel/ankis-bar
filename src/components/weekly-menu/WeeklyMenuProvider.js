import React, {useEffect, useState} from 'react';

import fetchWeeklyMenu from './fetchWeeklyMenu';
import WeeklyMenuContext from './WeeklyMenuContext';

const WeeklyMenuProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchWeeklyMenu()
      .then(data =>  setData(data))
      .finally(() => setIsLoading(false))
  }, []);

  return (
    <WeeklyMenuContext.Provider value={{...data, isLoading}}>
      {children}
    </WeeklyMenuContext.Provider>
  );
};

export default WeeklyMenuProvider;
