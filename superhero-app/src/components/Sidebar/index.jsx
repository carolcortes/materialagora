import React, { useContext } from 'react';
import appContext from '../../context/appContext';
import Button from '../Button';
import Favorites from '../Favorites';
import Groups from '../Groups';
import './sidebar.css';

const Sidebar = () => {
  const { selectedCards } = useContext(appContext);

  const showPopUp = () => {
    const popUp = document.querySelector('.pop-up');
    popUp.classList.add('show-pop-up')
  }

  return (
    <aside className="sidebar">
      <Button 
        onClick={showPopUp}
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
