import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import './card.css';

const Card = ({ superhero }) => {
  const { id, name, image, alignment, publisher } = superhero;
  const [favorite, setFavorite] = useState(false);

  const favoriteClick = () => {
    setFavorite(!favorite)
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
        { favorite ? <AiFillStar onClick={favoriteClick} /> : <AiOutlineStar onClick={favoriteClick} /> }
      </div>
    </div>
  );
}

Card.propTypes = {
  superhero: PropTypes.string,
}.isRequired;

export default Card;
