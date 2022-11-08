import React, { useContext } from 'react';
import appContext from '../../context/appContext';
import Button from '../Button';
import Favorites from '../Favorites';
import './sidebar.css';

const Sidebar = () => {
  const { groups, selectedCards, setGroups, setSelectedCards } = useContext(appContext);

  const createGroup = () => {
    setGroups((prevState) => [...prevState, {groupName: 'grupo', groupList: [selectedCards]}]);
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
      <div className="groups-container">
      <h2>Grupos</h2>
      { groups.length === 0 && (
        <p>Selecione heróis e/ou vilões para cadastrar um novo grupo!</p>
      ) }
      {groups && (
        groups.map(({ groupName }) => (
          <div key={groupName}>
            <h4>{groupName}</h4>
          </div>
        ))
      )}
      </div>
      <Favorites />
    </aside>
  );
}

export default Sidebar;
