import React, { useContext } from 'react';
import appContext from '../../context/appContext';
import Button from '../Button';
import Favorites from '../Favorites';
import Groups from '../Groups';
import './sidebar.css';

const Sidebar = () => {
  const { selectedCards, setGroups, setSelectedCards } = useContext(appContext);

  const createGroup = () => {
    setGroups((prevState) => [
      ...prevState,
      {groupName: `grupo ${prevState.length + 1}`, groupList: selectedCards},
    ]);
    setSelectedCards([]);
  }

  return (
    <aside className="sidebar">
      <Button 
        onClick={createGroup}
        disabled={selectedCards.length === 0}
      >
        Criar grupo
      </Button>
      <Groups />
      <Favorites />
    </aside>
  );
}

export default Sidebar;
