import React from "react";
import services from '../data/service.json';
import Reveal from "../utils/Reveal";
import '../assets/css/service.css';

function Service() {
    return (
        <section className="service container__fit pb-[1.4em]">
            <div className="service__outer-wrapper grid grid-cols-1 t:grid-cols-2">
                <div className="h-[101%] wrapper__border">
                    <Reveal className="h-34% t:h-32%" delay={0.25}>
                    <div className="wrapper__border left__top-service-wrapper h-full flex flex-col justify-between p-[1em]">
                        <h1 className="fancy__servicetext">Implant<br/> Dentistry</h1>
                        <label className="weight-500">Restore missing teeth</label>
                    </div>
                    </Reveal>
                    <Reveal className="xxs:h-30% h-35% t:h-30% xxs:h-50% " delay={0.35}>
                    <div className="wrapper__border-top h-full flex">
                        <div className="wrapper__border image__wrapper-left h-[103%] w-[51%]"></div>
                        <div className="wrapper__border-left image__wrapper-right h-[103%] w-[51%]"></div>
                    </div>
                    </Reveal>
                    <Reveal className="h-32% t:h-40%" delay={0.45}>
                    <div className="wrapper__border-top left__bottom-service-wrapper h-full flex flex-col justify-between p-[1em]">
                        <div className="visible-flex t:hide">
                            <label>Consultation</label>
                        </div>
                        <div className="flex justify-between">
                            <div className="sub__heading-service-wrapper-400">
                            <label className="sub__heading weight-500">Dental Restoration Services</label>
                            </div>
                            <a href="#contact"><button className="primary__btn weight-600">Book Online</button></a>
                        </div>
                        <div className=" w-full h-[150px] hide t:visible-flex justify-between">
                        {services.map((service,index) => (
                            <div className="service__card-wrapper p-[.8em] h-full w-[48%] flex flex-col justify-between" data-key={index} key={index}>
                                <div className="sub__heading-service-wrapper-600">
                               <label className="sub__heading">{service.text}</label>
                               </div>
                               <div className="w-full flex justify-end pr-[10px]">
                               <label className="card__service-arrow">{index+1}</label>
                               </div>
                            </div>
                        ))}
                    </div>
                    </div>
                    </Reveal>
                    
                </div>
                <Reveal className="h-[101%] w-full t:hide visible-flex" delay={0.35}>
                <div className="h-full w-full wrapper__border-left outer__wrapper-right  flex items-end p-[1em]">
                <Reveal className="h-[150px] w-full" delay={0.35}>
                    <div className="flex h-full w-full  justify-between">
                        {services.map((service,index) => (
                            <div className="service__card-wrapper p-[.8em] h-full w-[48%] flex flex-col justify-between" data-key={index} key={index}>
                                <div className="sub__heading-service-wrapper-600">
                               <label className="sub__heading">{service.text}</label>
                               </div>
                               <div className="w-full flex justify-end pr-[10px]">
                               <label className="card__service-arrow">{index+1}</label>
                               </div>
                            </div>
                        ))}
                    </div>
                    </Reveal>
                </div>
                </Reveal>
            </div>
        </section>
    )
}

export default Service;