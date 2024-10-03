import React from "react";
import "../assets/css/footer.css";

function Footer() {
  const APKUrl = "https://play.google.com/store/apps/details?id=host";
  const AppstoreUrl = "https://apps.apple.com/in/app/apple-store";

  return (
    <footer className="footer">
      <div className="footer__outer-wrapper container__fit py-[.6em] mt-10">
        <div className="bg-black rounded-[.9em] container__fit py-[.6em]">
         <div className="footer__top-wrapper grid grid-cols-1 t:grid-cols-2 gap-0 t:gap-10 text-white">
        <div className="footer__contact-address-wrapper py-[1em]">
          <label className="footer__menu-item font-medium">Contact us</label>
          <div className="py-[1em] address-container">
            <p className="">
              <span className="font-medium">Address </span>: 203, Radhasaomi
              sukun Near APC circle, New, Sardar Patel Rd, Rajmarg, Anand,
              Gujarat 388001
            </p>
            <p className="">
              <span className="font-medium">Phone </span>: +91 9023606160
            </p>
            <p className="">
              <span className="font-medium">Email </span>: info@drtsdentalcare.com
            </p>
            <p className="">
              <span className="font-medium">Instagram </span>: drsujal_tsdental
            </p>
          </div>
        </div>
        <div className="footer__menu-container py-[1em]">
            <ul className="footer__menu-wrapper menu__text pb-4">
              {/*   <a href="/"><li className="footer__menu-item">Our Dentists</li></a> */}
              <a className="flex items-center gap-2" href="https://www.instagram.com/reel/CyGZVeyvQJB/?igsh=cTFmNXNkY2FhOXFz" target="_blank" rel="noreferrer">
                <img width={25} src="https://ik.imagekit.io/gunadev/Dental/instagram%20(1).png?updatedAt=1727715972452" alt="instagram"/>
                <li className="footer__menu-item">Reviews</li>
              </a>
            </ul>
          </div>
        <div className="footer__app-link-wrapper">
          <label className="base__text">Available on</label>
          <div className="flex items-center gap-4">
          <a href={APKUrl}>
            <img
              src="https://ik.imagekit.io/gunadev/Dental/playbutton.png?updatedAt=1722407761844"
              alt="google_play_bage"
              className="play__button"
            />
          </a>
          <a href={AppstoreUrl}>
            <img
              src="https://ik.imagekit.io/gunadev/Dental/appstore.png?updatedAt=1726568601956"
              alt="app_store_bage"
              className="play__button"
            />
          </a>
          </div>
        </div>
        </div>
        <div className="footer__main-wrapper text-white">
          <div className="footer__copyright-wrapper">
            <label className="copyright__label">TS Dental Care 2024.</label>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
