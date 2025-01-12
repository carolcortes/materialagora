import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import PopUp from '../../components/popUp';
import SearchBar from '../../components/SearchBar';
import Sidebar from '../../components/Sidebar';
import appContext from '../../context/appContext';
import superheroAPI from '../../services/superheroAPI';
import './home.css';

const Home = () => {
  const { setSelectedCards } = useContext(appContext);

  const [superheroes, setSuperheroes] = useState([]);
  const [loadLength, setLoadLength] = useState(9);
  const [searchValue, setSearchValue] = useState('');
  const [searchLength, setSearchLength] = useState();

  useEffect(() => {
    setSelectedCards([]);
  }, []);

  useEffect(() => {
    loadSuperheroes();
  }, [loadLength, searchValue]);

  useEffect(() => {
    resetLoadLength();
  }, [searchValue])

  const resetLoadLength = () => {
    setLoadLength(9)
  }

  const onInputChange = ({ target }) => {
    setSearchValue(target.value);
  }

  const loadSuperheroes = async () => {
    const heroes = [];
    const { data } = await superheroAPI.get(`search/${searchValue || 'a'}`);
    if (data.response === 'error') {
      setSearchLength(0);
      return setSuperheroes(heroes);
    }
    for (let n = loadLength - 2; n >= 0; n -= 1) {
      if (data.results[n]) {
        const { id, name, image, biography } = data.results[n];
        heroes.push({
          id,
          name,
          image: image.url,
          alignment: biography.alignment,
          publisher: biography.publisher
        });
        setSearchLength(data.results.length);
      }
    }
    heroes.sort((a, b) => a.id - b.id);
    setSuperheroes(heroes);
  };

  const handleButtonClick = () => {
    setLoadLength((prevState) => prevState + 8)
  }

  return (
    <div className="home-page">
      <Sidebar />
      <main className="main-container">
        <SearchBar onChange={onInputChange} searchValue={searchValue} />
        <div className="result-line">
          { searchValue && searchLength > 0 && (
            <p>
            ❖ {searchLength} {searchLength === 1 
              ? 'resultado encontrado' : 'resultados encontrados'} ❖
            </p>
          ) }
          { searchLength === 0 && (
            <p>❖ Nenhum resultado encontrado ❖</p>
          ) }
        </div>
        <div className="cards-container">
        {
          superheroes.map((superhero) => (
            <Card superhero={superhero} key={superhero.id} />
          ))
        }
        </div>
        <div className="show-button">
          { superheroes.length >= 8 && (
            <Button
              disabled={superheroes.length === searchLength}
              onClick={handleButtonClick}>
              Mostrar mais
            </Button>
          ) }
        </div>
      </main>
      <PopUp />
    </div>
  );
}

export default Home;
