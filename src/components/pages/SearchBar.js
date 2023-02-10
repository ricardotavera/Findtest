import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ names }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = event => {
    setQuery(event.target.value);
    setSuggestions(
      names.filter(name => name.toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div  className="search-page">
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="search-input"
      />
      <button className="search-button">Search</button>
      <br/>
      <br/>
      <br/>
      {suggestions.length > 0 && (
        <ul className="suggestions-container">
          {suggestions.map(suggestion => (
            <li key={suggestion} className="suggestion">
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default SearchBar;