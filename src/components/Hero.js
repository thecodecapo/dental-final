import React from "react";
import '../assets/css/hero.css';

function Hero() {
    return(
        <section className="hero container__fit pb-[1.4em]">
            <div className="hero__outer-wrapper">
                <div className="content__outer-wrapper wrapper__border wrapper sm:h-8% h-10.5%">
                
                    <h2 className="sub__heading hero__sub-heading weight-600">Advanced Dentistry</h2>
                    
                </div>
       
                <div className="content__outer-wrapper wrapper__border wrapper sm:h-8% h-10.5%">
                <h2 className="sub__heading hero__sub-heading weight-600">High Quality Equipment</h2>
                </div>
                <div className="content__outer-wrapper wrapper__border wrapper sm:h-8% h-10.5%">
                <h2 className="sub__heading hero__sub-heading weight-600">Friendly Staff</h2>
                </div>
                <div className="content__outer-wrapper wrapper__border sm:h-79% h-71% hero__bottom-container flex flex-col justify-between">
                    <div className="hero__top-wrapper p-[1.5em]">
                        <label className="weight-500 base__text">We wish to provide professional dental services<br /> that match the current technologies</label>
                    </div>
                    <div className="hero__bottom-wrapper p-[1.5em] grid grid-cols-1 sm:grid-cols-2">
                        <div className="hero__fancy-text-wrapper">
                        <h1 className="fancy__text">Dental <br /> Care</h1>
                        </div>
                        <div className="hero__bottom-wrapper-last flex flex-col w-full items-end justify-between">
                            <div className="">
                            <h3 className="text-center hero__tagline text-white">We believe in the power <br />of your smile</h3>
                            </div>
                            <div className="flex flex-col text-end">
                                <label className="label_tag text-white mb-[1.8em]">Free Consultation</label>
                                <button className="primary__btn weight-600">Book Online</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;