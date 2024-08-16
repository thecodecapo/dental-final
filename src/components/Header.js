import React from "react";
import '../assets/css/header.css';

function Header() {

    const logo = "https://ik.imagekit.io/gunadev/Dental/logo.png?updatedAt=1722418472770";
    const APKUrl = "https://play.google.com/store/apps/details?id=host";

    return (
        <header className="header">
           <div className="header__outer-wrapper container__fit flex justify-between items-center py-[.6em]">
                <div className="header__logo-wrapper">
                    <img src={logo} alt="logo" width={80} height={80} />
                </div>
                <div className="header__button-wrapper">
                    <a href={APKUrl} className="cursor-pointer"><label className="button__label">Download Our App</label></a>
                </div>
           </div>
        </header>
    )
}

export default Header;