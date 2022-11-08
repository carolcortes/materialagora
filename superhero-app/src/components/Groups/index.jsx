import React, { useContext, useState } from 'react';
import appContext from '../../context/appContext';
import { MdArrowForwardIos } from 'react-icons/md';
import { FaRegWindowClose } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';
import './groups.css';

const Groups = () => {
  const { groups, setGroups } = useContext(appContext);
  const [isActive, setIsActive] = useState(false);
  const [activeGroup, setActiveGroup] = useState(false);

  const showGroups = () => {
    setIsActive(!isActive);
    if (isActive) {
      setActiveGroup(false);
    }
  }

  const showOneGroup = () => {
    setActiveGroup(!activeGroup);
  }

  const removeGroup = ({target}) => {
    setGroups((prevState) => prevState.filter((el) => el.groupName !== target.id));
  }

  const renameGroup = ({target}) => {
    console.log(target.id)
  }

  const removeHeroFromGroup = (id, groupName) => {
    const { groupList } = groups.find((groups) => groups.groupName === groupName);
    const removeHero = groupList.filter((hero) => hero.id !== id);

    const newGroups = groups.filter((el) => el.groupName !== groupName);
    if (removeHero.length > 0) newGroups.push({ groupName, groupList: removeHero });

    setGroups(newGroups);
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
        groups.map(({ groupName, groupList }) => (
          <div key={groupName} className="group-content">
            <div className="group-header">
              <div className="group-settings">
                <FaRegWindowClose id={groupName} onClick={removeGroup} />
                <RiEdit2Line id={groupName} onClick={renameGroup} />
              </div>
              <div className="group-name" onClick={showOneGroup}>
                <h4>{groupName}</h4>
                <MdArrowForwardIos className={`${activeGroup ? 'active' : 'inactive'}-group`} />
              </div>
            </div>
            {activeGroup && groupList.map((hero) => (
                <div className="group-line" id={hero.id} name={groupName} key={hero.name}>
                  <div className="hero-content">
                    <img src={hero.image} alt={`${hero.name} image`} />
                    <div className="group-info">
                      <h4>{hero.name}</h4>
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
