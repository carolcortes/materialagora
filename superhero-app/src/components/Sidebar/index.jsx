import React, { useContext } from 'react';
import appContext from '../../context/appContext';
import Button from '../Button';
import './sidebar.css';

const Sidebar = () => {
  const { favoriteList, groups, selectedCards, setGroups, setSelectedCards } = useContext(appContext);

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
      <div className="favorite-container">
        <h2>Favoritos</h2>
        {favoriteList.length === 0 && (
          <p>Você não possui heróis e/ou vilões favoritos</p>
        )}
        <div className="favorite-heroes">
          {favoriteList.map(({image, name, id}) => (
            <div className="favorite-line" id={id} key={id}>
              <img src={image} alt={`${name}`} />
              <h4>{name}</h4>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
