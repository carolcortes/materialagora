import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { MdRadioButtonUnchecked } from 'react-icons/md'
import './card.css';
import appContext from '../../context/appContext';
import { useHistory } from 'react-router-dom';

const Card = ({ superhero }) => {
  const history = useHistory();
  const { id, name, image, alignment, publisher } = superhero;
  const [favorite, setFavorite] = useState(false);
  const [selected, setSelected] = useState(false);
  const { setFavoriteList, favoriteList, setSelectedCards, groups } = useContext(appContext);

  useEffect(() => {
    setSelected(false);
  }, [groups])

  useEffect(() => {
    setFavorite(favoriteList.some(({ id }) => id === superhero.id))
  }, [favoriteList])

  const favoriteClick = async () => {
    if (favorite) {
      setFavoriteList((prevState) => prevState.filter((el) => el.id !== id));
      setFavorite(false);
    } else {
      setFavorite(true);
      setFavoriteList((prevState) => [
        ...prevState,
        { name, id, image, alignment, publisher},
      ]);
    }
  }

  const groupOptionsClick = async () => {
    if (selected) {
      setSelectedCards((prevState) => prevState.filter((el) => el.id !== id));
    } else {
      setSelectedCards((prevState) => [
        ...prevState,
        { name, id, image, alignment, publisher},
      ]);
    }
    setSelected(!selected);
  }

  const getHeroDetails = (id) => {
    history.push(`/details/${id}`)
  }

  return (
    <div
      className={`hero-card ${alignment === 'good' ? 'green' : 'red'}-hover`}
    >
      <div className="hero-status">
        <p className="hero-id">{id}</p>
        <p>{alignment === 'good' ? 'HERÓI' : 'VILÃO'}</p>
      </div>
      <img src={image} alt={`${name} image`} onClick={ () => getHeroDetails(id)} />
      <h3 onClick={ () => getHeroDetails(id)}>{name}</h3>
      <p>{publisher}</p>
      <div className="select-options">
          { favorite 
            ? <AiFillStar id={id} onClick={favoriteClick} /> 
            : <AiOutlineStar id={id} onClick={favoriteClick} /> }
          { selected
            ? <IoMdCheckmarkCircleOutline id={id} onClick={groupOptionsClick} /> 
            : <MdRadioButtonUnchecked id={id} onClick={groupOptionsClick} /> }
      </div>
    </div>
  );
}

Card.propTypes = {
  superhero: PropTypes.string,
}.isRequired;

export default Card;
