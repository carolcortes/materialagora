import React from 'react';
import PropTypes from 'prop-types';
import './searchBar.css';

const SearchBar = ({ searchValue, onChange }) => {

  return (
    <div className="search-bar">
      <label htmlFor="search-bar">
        <input
          value={searchValue}
          onChange={onChange}
          type="text"
          id="search-bar"
          placeholder="Pesquisar herói ou vilão pelo nome"
        />
      </label>
    </div>
  );
}

SearchBar.propTypes = {
  searchValue: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default SearchBar;
