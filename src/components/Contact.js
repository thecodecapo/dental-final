import React from "react";
import ContactForm from "../utils/ContactForm";
import Reveal from "../utils/Reveal";
import '../assets/css/contact.css';

function Contact() {
    return (
        <section className="contact container__fit">
            <div className="contact__outer-wrapper flex flex-col">
                <div className="wrapper__border top__wrapper-contact flex-1"></div>
                <div className="wrapper__border-top bg-black flex flex-col gap-[40px] p-[1em]">
                    <Reveal delay={0.25}>
                    <h1 className="fancy__contacttext text-white">Book Online</h1>
                    </Reveal>
                    <Reveal delay={0.25}>
                    <label className="weight-500 text-white">Book Your Appointment Today</label>
                    </Reveal>
                    <Reveal delay={0.35}>
                    <div id="contact" className="flex">
                        <ContactForm />
                    </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default Contact;