import React from 'react';
import Button from '../Button';
import './searchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <label htmlFor="search-bar">
        <input 
          type="text"
          id="search-bar"
          placeholder="Pesquisar herói ou vilão pelo nome"
        />
      </label>
      <Button onClick={() => {console.log('pesquisar')}}>Pesquisar</Button>
    </div>
  );
}

export default SearchBar;
