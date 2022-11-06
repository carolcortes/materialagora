import React, { useState } from 'react';
import appContext from './appContext';

const AppProvider = ({ children }) => {
  const [favoriteList, setFavoriteList] = useState([]);

  const context = {favoriteList, setFavoriteList}

  return (
    <appContext.Provider value={ context }>
      {children}
    </appContext.Provider>
  )
}

export default AppProvider;