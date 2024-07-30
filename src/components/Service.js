import React from "react";
import services from '../data/service.json';
import '../assets/css/service.css';

function Service() {
    return (
        <section className="service container__fit pb-[1.4em]">
            <div className="service__outer-wrapper grid grid-cols-1 t:grid-cols-2">
                <div className="h-[101%] wrapper__border">
                    <div className="wrapper__border h-34% t:h-32% flex flex-col justify-between p-[1em]">
                        <h1 className="fancy__servicetext">Implant<br/> Dentistry</h1>
                        <label className="weight-500">Restore missing teeth</label>
                    </div>
                    <div className="wrapper__border-top h-35% t:h-33% xxs:h-50% flex">
                        <div className="wrapper__border image__wrapper-left h-[103%] w-[51%]"></div>
                        <div className="wrapper__border-left image__wrapper-right h-[103%] w-[51%]"></div>
                    </div>
                    <div className="wrapper__border-top h-34% xl:h-37.5% t:h-40% left__bottom-service-wrapper flex flex-col justify-between p-[1em]">
                        <div className="visible-flex sm:hide">
                            <label>Consultation</label>
                        </div>
                        <div className="flex justify-between">
                            <div className="sub__heading-service-wrapper-400">
                            <label className="sub__heading weight-500">Dental Restoration Services</label>
                            </div>
                            <button className="primary__btn weight-600">Book Online</button>
                        </div>
                        <div className=" w-full h-[150px] hide t:visible-flex justify-between">
                        {services.map((service,index) => (
                            <div className="service__card-wrapper p-[.8em] h-full w-[48%] flex flex-col justify-between" data-key={index} key={index}>
                                <div className="sub__heading-service-wrapper-600">
                               <label className="sub__heading">{service.text}</label>
                               </div>
                               <div className="w-full flex justify-end pr-[10px]">
                               <label className="card__service-arrow">&#8963;</label>
                               </div>
                            </div>
                        ))}
                    </div>
                    </div>
                    
                </div>
                <div className="h-[101%] w-full wrapper__border-left outer__wrapper-right t:hide visible-flex flex items-end p-[1em]">
                    <div className="flex w-full h-[150px] justify-between">
                        {services.map((service,index) => (
                            <div className="service__card-wrapper p-[.8em] h-full w-[48%] flex flex-col justify-between" data-key={index} key={index}>
                                <div className="sub__heading-service-wrapper-600">
                               <label className="sub__heading">{service.text}</label>
                               </div>
                               <div className="w-full flex justify-end pr-[10px]">
                               <label className="card__service-arrow">&#8963;</label>
                               </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service;