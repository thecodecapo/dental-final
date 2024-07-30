import React from "react";
import '../assets/css/header.css';
import logo from '../assets/images/logodental.png';

function Header() {
    return (
        <header className="header">
           <div className="header__outer-wrapper container__fit flex justify-between items-center py-[.6em]">
                <div className="header__logo-wrapper">
                    <img src={logo} alt="logo" width={80} height={80} />
                </div>
                <div className="header__menu-wrapper">
                    <button className="header__primary-btn">Menu</button>
                </div>
                <div className="header__button-wrapper">
                    <a href="/" className="cursor-pointer"><label className="button__label">Dental Emergency</label></a>
                </div>
           </div>
        </header>
    )
}

export default Header;