import React from "react";
import '../assets/css/header.css';

function Header() {

    const logo = "https://ik.imagekit.io/gunadev/Dental/logo.png?updatedAt=1722418472770";
    const APKUrl = "https://play.google.com/store/apps/details?id=host";
    const AppstoreUrl = "https://apps.apple.com/in/app/apple-store";

    return (
        <header className="header">
           <div className="header__outer-wrapper container__fit flex justify-between items-center py-[.6em]">
                <div className="header__logo-wrapper">
                    <img src={logo} alt="logo" width={100} height={100} />
                </div>
                <div className="header__button-wrapper">
                    <a href={APKUrl} target="_blank" rel="noreferrer" className="play__store-button__wrapper cursor-pointer"><img className="play__store-button button__label" src="https://ik.imagekit.io/gunadev/Dental/9055775_bxl_play_store_icon.png?updatedAt=1726555148812" width={40} alt="playstore button"/></a>
                    <a href={AppstoreUrl} target="_blank" rel="noreferrer" className="app__store-button__wrapper cursor-pointer"><img className="app__store-button button__label" src="https://ik.imagekit.io/gunadev/Dental/5761458_app_appstore_ic_iphone_icon.png?updatedAt=1726555148840" width={35} alt="apple store button"/></a>
                </div>
           </div>
        </header>
    )
}

export default Header;