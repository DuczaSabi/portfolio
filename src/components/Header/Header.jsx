import React, { useState } from 'react';
import './Header.css';

import HUFlag from '../../Images/flag-hu.svg'
import GBFlag from '../../Images/flag-gb.svg'
import DarkModeIcon from '../../Images/dark-mode.svg'
import LightModeIcon from '../../Images/light-mode.svg'

function Header({language, setLanguage, isDark, setIsDark}) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleIsopen = () => {
    const header = document.querySelector('.header');
    const headerPoints = document.querySelector('.header-points');
    const headerToggles = document.querySelector('.header-toggles');

    header.classList.toggle('header-closed');

    if (isOpen) {
        headerPoints.classList.toggle('fade');
        headerToggles.classList.toggle('fade');
        setTimeout(() => {
            headerPoints.classList.toggle('hide');
            headerToggles.classList.toggle('hide');
        }, 200);
    } else {
        headerPoints.classList.toggle('hide');
        headerToggles.classList.toggle('hide');
        setTimeout(() => {
            headerPoints.classList.toggle('fade');
            headerToggles.classList.toggle('fade');
        }, 100);
    }


    setIsOpen(!isOpen);
  };

    const toggleIsDark = () => {
    setIsDark(!isDark);
  };

    const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hu' : 'en');
  };

  return (
    <header className="header">
        {language === "en" ? 
        <div className='header-points'>
            <span>Studies</span>
            <span>Skills</span>
            <span>About me</span>
        </div>
        :
        <div className='header-points'>
            <span>Tanulmányok</span>
            <span>Képességek</span>
            <span>Rólam</span>
        </div>}

        <span className='header-logo' onClick={toggleIsopen}>Ducza Szabolcs</span>

        <div className='header-toggles'>
            <button onClick={toggleIsDark} style={{ backgroundImage: `url(${isDark === true ? DarkModeIcon : LightModeIcon})` }}></button>
            <button onClick={toggleLanguage} style={{ backgroundImage: `url(${language === "en" ? GBFlag : HUFlag})` }}></button>
        </div>

    </header>
  );
}

export default Header;
