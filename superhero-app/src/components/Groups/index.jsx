import React, { useContext, useState } from 'react';
import appContext from '../../context/appContext';
import { MdArrowForwardIos } from 'react-icons/md';
import { FaRegWindowClose } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';
import './groups.css';
import { useHistory } from 'react-router-dom';

const Groups = () => {
  const history = useHistory();
  const { groups, setGroups, setRename } = useContext(appContext);
  const [isActive, setIsActive] = useState(false);

  const showGroups = () => {
    setIsActive(!isActive);
    if (isActive) {
      setGroups((prevState) => prevState.map((group) => ({...group, visible: false})))
    }
  }

  const showOneGroup = (groupName) => {
    setGroups((prevState) => prevState.map((group) => group.groupName === groupName
      ? {...group, visible: !group.visible} : {...group}))
  }

  const removeGroup = ({target}) => {
    setGroups((prevState) => prevState.filter((el) => el.groupName !== target.id));
  }

  const showPopUp = (groupName) => {
    const popUp = document.querySelector('.pop-up');
    popUp.classList.add('show-pop-up');
    setRename({group: groupName, status: true});
  }

  const removeHeroFromGroup = (id, groupName) => {
    const { groupList } = groups.find((groups) => groups.groupName === groupName);
    const removeHero = groupList.filter((hero) => hero.id !== id);

    const newGroups = groups.filter((el) => el.groupName !== groupName);
    if (removeHero.length > 0) newGroups.push({ groupName, groupList: removeHero });

    setGroups(newGroups);
  }

  const getHeroDetails = (id) => {
    history.push(`/details/${id}`)
  }
  
  return (
    <div 
      className={`groups-container ${isActive ? 'active' : 'inactive'}`}
    >
      <div className="groups-title" onClick={showGroups}>
        <h2>Grupos</h2>
        <MdArrowForwardIos className={`${isActive ? 'active' : 'inactive'}-arrow`} />
      </div>
      { groups.length === 0 && isActive && (
        <p>Selecione heróis e/ou vilões para cadastrar um novo grupo!</p>
      ) }
      {groups && isActive && (
        groups.map(({ groupName, groupList, visible }) => (
          <div key={groupName} className="group-content">
            <div className="group-header">
              <div className="group-settings">
                <FaRegWindowClose id={groupName} onClick={removeGroup} />
                <RiEdit2Line onClick={() => showPopUp(groupName)} />
              </div>
              <div className="group-name" onClick={() => showOneGroup(groupName)}>
                <h4>{groupName}</h4>
                <MdArrowForwardIos className={`${visible ? 'active' : 'inactive'}-group`} />
              </div>
            </div>
            {visible && groupList.map((hero) => (
                <div className="group-line" id={hero.id} name={groupName} key={hero.name}>
                  <div className="hero-content">
                    <img 
                      onClick={ () => getHeroDetails(hero.id)}
                      src={hero.image}
                      alt={`${hero.name} image`} 
                    />
                    <div className="group-info">
                      <h4 onClick={ () => getHeroDetails(hero.id)}>{hero.name}</h4>
                      <p>{hero.publisher}</p>
                      <p className="hero-status">{hero.alignment === 'good' ? 'HERÓI' : 'VILÃO'}</p>
                    </div>
                  </div>
                  <FaRegWindowClose onClick={() => removeHeroFromGroup(hero.id, groupName)} />
                </div>
              ))}
          </div>
        ))
      )}
    </div>
  );
}

export default Groups;
