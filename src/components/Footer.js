import React from "react";
import '../assets/css/footer.css';

function Footer() {
    return (
        <footer className="footer">
           <div className="footer__outer-wrapper container__fit py-[.6em]">
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
                   <label className="copyright__label">Dental Health 2023.</label>
                </div>
           </div>
        </footer>
    )
}

export default Footer;