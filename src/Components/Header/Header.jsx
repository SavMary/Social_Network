import React from 'react';
import s from './Header.module.css';
const Header =()=>{
    return(
        <header className={s.header}>
        <img src="https://upload.wikimedia.org/wikipedia/de/thumb/c/cb/Raspberry_Pi_Logo.svg/570px-Raspberry_Pi_Logo.svg.png" alt="logo"/>
      </header>
    );

}

export default Header;