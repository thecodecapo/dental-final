import React from "react";
import Reveal from "../utils/Reveal";
import '../assets/css/hero.css';

function Hero() {
    return(
        <section className="hero container__fit pb-[1.4em]">
            <div className="hero__outer-wrapper">
                <Reveal className="" delay={0.25}>
                 <div className="content__outer-wrapper wrapper__border wrapper h-full py-[1.2em] sm:py-[1.5em] t:py-[1.5em] ">
                    <h2 className="sub__heading hero__sub-heading weight-600">Advanced Dentistry</h2> 
                </div>
                </Reveal>
                <Reveal className="" delay={0.35}>
                <div className="content__outer-wrapper wrapper__border wrapper h-full py-[1.2em] sm:py-[1.5em] t:py-[1.5em]">
                <h2 className="sub__heading hero__sub-heading weight-600">High Quality Equipment</h2>
                </div>
                </Reveal>
                <Reveal className="" delay={0.45}>
                <div className="content__outer-wrapper wrapper__border wrapper h-full py-[1.2em] sm:py-[1.5em] t:py-[1.5em]">
                <h2 className="sub__heading hero__sub-heading weight-600">Friendly Staff</h2>
                </div>
                </Reveal>
                <Reveal className="flex-grow" delay={0.55}>
                <div className="content__outer-wrapper wrapper__border h-full hero__bottom-container flex flex-col justify-between">
                    <div className="hero__top-wrapper p-[1.5em]">
                        <label className="weight-500 base__text">Where Your Smile Meets<br /> Precision and Compassion</label>
                    </div>
                    <Reveal delay={0.65}>
                    <div className="hero__bottom-wrapper p-[1.5em] grid grid-cols-1 sm:grid-cols-2">
                        <div className="hero__fancy-text-wrapper">
                        <h1 className="fancy__text">Precision <br /> Dentistry</h1>
                        </div>
                        <div className="hero__bottom-wrapper-last flex flex-col w-full items-end justify-between">
                            <div className="">
                            <h3 className="text-center hero__tagline text-white hidden">We believe in the power <br />of your smile</h3>
                            </div>
                            <div className="flex flex-col text-end hidden">
                                <label className="label_tag text-white mb-[1.8em]">Free Consultation</label>
                                <a href="#contact"><button className="primary__btn weight-600">Book Online</button></a>
                            </div>
                        </div>
                    </div>
                    </Reveal>
                </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Hero;