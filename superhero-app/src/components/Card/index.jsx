import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import './card.css';
import appContext from '../../context/appContext';

const Card = ({ superhero }) => {
  const { id, name, image, alignment, publisher } = superhero;
  const [favorite, setFavorite] = useState(false);
  const { setFavoriteList } = useContext(appContext);

  const favoriteClick = async () => {
    if (favorite) {
      setFavoriteList((prevState) => prevState.filter((el) => el.id !== id));
      setFavorite(false);
    } else {
      setFavorite(true);
      setFavoriteList((prevState) => [...prevState, { name, id, image }]);
    }
  }

  return (
    <div
      className={`hero-card ${alignment === 'good' ? 'green' : 'red'}-hover`}
      onClick={() => {console.log('click')}}
    >
      <p className="hero-id">{id}</p>
      <img src={image} alt={`${name} image`} />
      <h3>{name}</h3>
      <p>{publisher}</p>
      <div className='favorite-card'>
        <p>{alignment === 'good' ? 'Herói' : 'Vilão'}</p>
        { favorite 
          ? <AiFillStar id={id} onClick={favoriteClick} /> 
          : <AiOutlineStar id={id} onClick={favoriteClick} /> }
      </div>
    </div>
  );
}

Card.propTypes = {
  superhero: PropTypes.string,
}.isRequired;

export default Card;
