import React from 'react';

export const Header = ({ theme, toggleTheme, moon, sun }) => {

  return (
    <h2 className="header">
      Expense Tracker 
      <button type="button" className="themeToggleBtn" onClick={toggleTheme}>
        <img src={ theme === "light" ? moon : sun } alt={theme}/>
        </button>
    </h2>
  )
}
