import React, { useContext, useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { FaRegWindowClose } from 'react-icons/fa';
import appContext from '../../context/appContext';
import './favorites.css';
import { useHistory } from 'react-router-dom';

const Favorites = () => {
  const history = useHistory();
  const { favoriteList, setFavoriteList } = useContext(appContext);
  const [isActive, setIsActive] = useState(false);

  const showFavorites = () => {
    setIsActive(!isActive);
  }

  const removeFavorite = ({target}) => {
    setFavoriteList((prevState) => prevState.filter((el) => el.id !== target.id));
  }

  const getHeroDetails = (id) => {
    history.push(`/details/${id}`)
  }

  return (
    <div 
      className={`favorite-container ${isActive ? 'active' : 'inactive'}`}
    >
      <div className="favorite-title" onClick={showFavorites}>
        <h2>Favoritos</h2>
        <MdArrowForwardIos className={`${isActive ? 'active' : 'inactive'}-arrow`} />
      </div>
      {isActive && favoriteList.length === 0 && (
        <p>Você não possui heróis e/ou vilões favoritos</p>
      )}
      {isActive && (
        <div className="favorite-heroes">
          {favoriteList.map(({image, name, id, publisher, alignment}) => (
            <div className="favorite-line" id={id} key={id}>
              <div className="favorite-content">
                <img onClick={ () => getHeroDetails(id)} src={image} alt={`${name}`} />
                <div className="favorite-info">
                  <h4 onClick={ () => getHeroDetails(id)}>{name}</h4>
                  <p>{publisher}</p>
                  <p className="hero-status">{alignment === 'good' ? 'HERÓI' : 'VILÃO'}</p>
                </div>
              </div>
              <FaRegWindowClose id={id} onClick={removeFavorite} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites;
