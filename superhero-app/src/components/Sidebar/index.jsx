import React, { useContext } from 'react';
import appContext from '../../context/appContext';
import './sidebar.css';

const Sidebar = () => {
  const { favoriteList } = useContext(appContext);

  return (
    <aside className="sidebar">
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
    </aside>
  );
}

export default Sidebar;
