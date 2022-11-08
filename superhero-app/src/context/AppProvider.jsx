import React, { useState } from 'react';
import PropTypes from 'prop-types';
import appContext from './appContext';

const AppProvider = ({ children }) => {
  const [favoriteList, setFavoriteList] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [groups, setGroups] = useState([]);

  const context = {
    favoriteList, 
    setFavoriteList,
    selectedCards,
    setSelectedCards,
    groups,
    setGroups,
  };

  return (
    <appContext.Provider value={ context }>
      {children}
    </appContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default AppProvider;