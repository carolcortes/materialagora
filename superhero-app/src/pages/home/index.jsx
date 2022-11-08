import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import Sidebar from '../../components/Sidebar';
import superheroAPI from '../../services/superheroAPI';
import './home.css';

const Home = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [loadLength, setLoadLength] = useState(9);
  const [searchValue, setSearchValue] = useState('');
  const [searchLength, setSearchLength] = useState();

  useEffect(() => {
    loadSuperheroes();
  }, [loadLength, searchValue]);

  const onInputChange = ({ target }) => {
    setSearchValue(target.value);
  }

  const loadSuperheroes = async () => {
    const heroes = [];
    if (searchValue) {
      const { data } = await superheroAPI.get(`search/${searchValue}`);
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
    } else if (searchValue.length === 0) {
      for (let n = 1; n < loadLength; n += 1) {
        const { data } = await superheroAPI.get(`${n}`);
        const { id, name, image, biography } = data;
        heroes.push({
          id,
          name,
          image: image.url,
          alignment: biography.alignment,
          publisher: biography.publisher
        });
      }
    }
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
    </div>
  );
}

export default Home;
