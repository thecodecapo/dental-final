import React from "react";
import '../assets/css/footer.css';

function Footer() {

   const APKUrl = "https://play.google.com/store/apps/details?id=host";

    return (
        <footer className="footer">
           <div className="footer__outer-wrapper container__fit py-[.6em]">
            <div className="footer__app-link-wrapper">
            <label className="base__text">Available on</label>
            <a href={APKUrl} ><img src="https://ik.imagekit.io/gunadev/Dental/playbutton.png?updatedAt=1722407761844" alt="google_play_bage" className="play__button" /></a>
            </div>
            <div className="footer__main-wrapper">
                <div className="footer__menu-container">
                   <ul className="footer__menu-wrapper menu__text">
                    <a href="/"><li className="footer__menu-item">Our Dentists</li></a>
                   <a href="/"><li className="footer__menu-item">About Us</li></a>
                    <a href="/"><li className="footer__menu-item">Patients</li></a>
                   <a href="/"><li className="footer__menu-item">Reviews</li></a>
                   <a href="/"><li className="footer__menu-item">Call Now</li></a>
                   </ul>
                </div>
                <div className="footer__copyright-wrapper">
                   <label className="copyright__label">TS Dental Care 2024.</label>
                </div>
                </div>
           </div>
        </footer>
    )
}

export default Footer;