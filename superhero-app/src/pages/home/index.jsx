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

  useEffect(() => {
    loadSuperheroes();
  }, [loadLength]);

  const loadSuperheroes = async () => {
    const heroes = [];
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
    setSuperheroes(heroes);
  };

  const handleButtonClick = () => {
    setLoadLength((prevState) => prevState + 8)
  }

  return (
    <div className="home-page">
      <Sidebar />
      <main className="main-container">
        <SearchBar />
        <div className="cards-container">
        {
          superheroes.map((superhero) => (
            <Card superhero={superhero} key={superhero.id} />
          ))
        }
        </div>
        <div className="show-button">
          { superheroes.length > 0 && (
            <Button
              onClick={handleButtonClick}
              disabled={loadLength >= 731}
            >
              Mostrar mais
            </Button>
          ) }
        </div>
      </main>
    </div>
  );
}

export default Home;
