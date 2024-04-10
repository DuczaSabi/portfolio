import React, { useState } from 'react';
import './Header.css';

import pinnedIcon from '../../Images/Header/pinnedIcon.svg'
import notPinnedIcon from '../../Images/Header/notPinnedIcon.svg'
import HUFlag from '../../Images/Header/flag-hu.svg'
import GBFlag from '../../Images/Header/flag-gb.svg'
import DarkModeIcon from '../../Images/Header/dark-mode.svg'
import LightModeIcon from '../../Images/Header/light-mode.svg'


function Header({language, setLanguage, isDark, setIsDark, isPinned, setIsPinned}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsopen = () => {
    if (isPinned) {
      const header = document.querySelector('.header');
      const headerPoints = document.querySelector('.header-points');
      const headerToggles = document.querySelector('.header-toggles');

      header.classList.toggle('header-closed');

      if (isOpen) {
          headerPoints.classList.toggle('fade');
          headerToggles.classList.toggle('fade');
          headerPoints.classList.toggle('hide');
          headerToggles.classList.toggle('hide');
      } else {
          headerPoints.classList.toggle('hide');
          headerToggles.classList.toggle('hide');
          setTimeout(() => {
              headerPoints.classList.toggle('fade');
              headerToggles.classList.toggle('fade');
          }, 200);
      }
    }


    setIsOpen(!isOpen);
  };

  const toggleIsPinned = () => {
    const header = document.querySelector('.header');
    header.classList.toggle('header-pinned');
    setIsPinned(!isPinned);
  };

  const toggleIsDark = () => {
    setIsDark(!isDark);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hu' : 'en');
  };

  return (
    <header className="header header-closed">
        {language === "en" ? 
        <div className='header-points hide fade'>
            <span>Projects</span>
        </div>
        :
        <div className='header-points hide fade'>
            <span>Projektek</span>
        </div>}

        <span className="header-logo" onClick={toggleIsopen}>Ducza Szabolcs</span>

        <div className='header-toggles hide fade'>
            <button onClick={toggleIsPinned} style={{ backgroundImage: `url(${isPinned === true ? pinnedIcon : notPinnedIcon})` }} className={isDark === true ? "header-icon-light" : ""}></button>
            <button onClick={toggleIsDark} style={{ backgroundImage: `url(${isDark === true ? DarkModeIcon : LightModeIcon})` }}></button>
            <button onClick={toggleLanguage} style={{ backgroundImage: `url(${language === "en" ? GBFlag : HUFlag})` }}></button>
        </div>

    </header>
  );
}

export default Header;
