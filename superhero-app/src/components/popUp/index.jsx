import React, { useContext, useState } from 'react';
import appContext from '../../context/appContext';
import Button from '../Button';
import './popUp.css';

function PopUp() {
  const { setGroups, setSelectedCards, selectedCards, rename, groups, setRename } = useContext(appContext);
  const [groupName, setGroupName] = useState('');

  const closePopUp = () => {
    const popUp = document.querySelector('.show-pop-up');
    popUp.className = 'pop-up';
  }

  const renameGroup = () => {
    const selectedGroup = groups.find((group) => group.groupName === rename.group);

    setGroups((prevState) => [
      ...prevState.filter((el) => el.groupName !== rename.group),
      {groupName, groupList: selectedGroup.groupList},
    ]);
    closePopUp();
    setGroupName('');
    setRename({status: false});
  }

  const createGroup = () => {
    setGroups((prevState) => [
      ...prevState,
      {groupName, groupList: selectedCards, visible: false},
    ]);
    setSelectedCards([]);
    setGroupName('');
    closePopUp();
  }

  const onButtonClick = ({target}) => {
    if (target.innerHTML === 'Novo grupo') {
      createGroup();
    } else {
      renameGroup();
    }
  }

  const onInputChange = ({target}) => {
    setGroupName(target.value)
  }

  return (
    <div className="pop-up">
      <div className="pop-up-content">
        <span className="close-pop-up" onClick={closePopUp}>&times;</span>
        <div className="pop-up-input">
          <label htmlFor="name-input">
            <input 
              value={groupName}
              id="name-input"
              type="text" 
              placeholder="Nome do grupo"
              onChange={onInputChange}
            />
          </label>
        </div>
        <Button disabled={!groupName || rename.group === groupName} onClick={onButtonClick}>
          {rename.status ? 'Renomear grupo' : 'Novo grupo'}
        </Button>
      </div>
    </div>
  );
}

export default PopUp;
