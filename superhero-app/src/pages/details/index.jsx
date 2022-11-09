import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import superheroAPI from '../../services/superheroAPI';
import './details.css';

const Details = () => {
  const history = useHistory();
  const id = window.location.pathname.split('/')[2];
  const [superhero, setSuperhero] = useState({});
  const {
    name,
    image,
    powerstats,
    biography,
    appearance,
  } = superhero

  useEffect(() => {
    loadSuperhero();
  }, []);

  const backButton = () => {
    history.push('/');
  }
  
  const loadSuperhero = async () => {
    const { data } = await superheroAPI.get(`${id}`);
    if (data) setSuperhero(data);
    console.log(data)
  }

  return (
    <div className="details-page">
      {name && (
        <div className="details-container">
          <h1>{name}</h1>
          <div className="details-content">
            <img src={image.url} alt={`${name} image`} />
            <div className="biography">
              <h4>Biografia</h4>
              <p><span>Nome completo:</span> {biography['full-name']}</p>
              <p><span>Local de nascimento:</span> {biography['place-of-birth']}</p>
              <p><span>Raça:</span> {appearance.race === 'Human' ? 'Humano' : appearance.race}</p>
              <p>
                <span>Peso e altura: </span>
                {appearance.weight[1]}, {appearance.height[1]}
              </p>
              <p><span>Alinhamento:</span> {biography.alignment === 'bad' ? 'Vilão' : 'Herói'}</p>
              <p><span>Primeira apariçao:</span> {biography['first-appearance']}</p>
              <p><span>Editora:</span> {biography.publisher}</p>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Combate</th>
                <th>Durabilidade</th>
                <th>Inteligência</th>
                <th>Poder</th>
                <th>Velocidade</th>
                <th>Força</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{powerstats.combat}</td>
                <td>{powerstats.durability}</td>
                <td>{powerstats.intelligence}</td>
                <td>{powerstats.power}</td>
                <td>{powerstats.speed}</td>
                <td>{powerstats.strength}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      { superhero.error && (
        <h4>Herói ou Vilão não encontrado</h4>
      )}
      <Button onClick={backButton}>Voltar</Button>
    </div>
  );
}

export default Details;
