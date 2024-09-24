import React from "react";
import ContactForm from "../utils/ContactForm";
import Reveal from "../utils/Reveal";
import data from '../data/usp.json';
import doctors from '../data/doctors.json';
import "../assets/css/contact.css";

function Contact() {
  return (
    <section className="contact container__fit">
      <div className="contact__outer-wrapper flex flex-col">
        <div className="wrapper__border top__wrapper-contact flex-1"></div>
        <div className="wrapper__border-top bg-black flex flex-col gap-[40px] p-[1em]">
          <Reveal delay={0.25}>
            <h1 className="fancy__contacttext text-white">About us</h1>
          </Reveal>
          <Reveal delay={0.35}>
            <div id="contact" className="flex hidden">
              <ContactForm />
            </div>
            <div className="">
            <label className="weight-500 text-white">
              At <b> Dr. T S Dental Care </b>
            </label>
              <p className="about__content">
                We offer world-class dental services with a personal touch. Led
                by our highly experienced dental specialists—Prosthodontist and
                a Micro-Endodontist—our clinic is committed to delivering
                top-notch dental care that transforms smiles and improves
                overall oral health.
              </p>
              <p className="about__content">
                We implement latest technology to design long-lasting,
                natural-looking tooth restorations. Whether you need a single
                tooth replaced or a full mouth rehabilitation, we ensure
                precision, comfort, and durability.
              </p>
            </div>
          </Reveal>
          
        </div>
        <div className="content__wrapper-choose-us p-[2em] mt-[5px]">
        <Reveal delay={0.45}>
            <div className="choose-us__container"> 
            <label className="text-heading text-black">
              Why Choose us?
            </label>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 m:grid-cols-4 gap-10">
            {data.map((item, index) => (
              <div className=" flex flex-col justify-start h-full gap-4" key={index}>
                <div className="flex justify-center">
                <img src={item.image} alt={item.text} width={60}/>
                </div>
                <div className=" flex flex-col items-center justify-center">
                  <label className="text-center weight-500">
                    {item.text}
                  </label>
                  <label className="text-center hidden">
                    {item.subtext}
                  </label>
                </div>
              </div>

          ))}
            </div>
            </div>
          </Reveal>
        </div>
        <div className="doctors__wrapper-choose-us p-[2em] mt-[5px]">
        <Reveal delay={0.45}>
            <div className="doctors__container"> 
            <label className="text-heading text-black">
              Our Specialists
            </label>
            <div className="mt-10 doctors__wrapper grid grid-cols-1 sm:grid-cols-2 gap-10">
            {doctors.map((doctor, index) => (
              <div className=" flex flex-col justify-start h-full gap-4" key={index}>
                <div className="flex justify-center">
                  <div className="doctors__profile-container" style={{backgroundImage : `url(${doctor.image})` }}></div>
                </div>
                <div className=" flex flex-col items-center justify-center">
                  <label className="text-center weight-500">
                    {doctor.name}
                  </label>
                  <label className="text-center">
                    {doctor.designation}
                  </label>
                  <p className="doctors__description">{doctor.description}</p>
                </div>
              </div>

          ))}
            </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
