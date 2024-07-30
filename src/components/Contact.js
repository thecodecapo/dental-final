import React from "react";
import '../assets/css/contact.css';

function Contact() {
    return (
        <section className="contact container__fit">
            <div className="contact__outer-wrapper flex flex-col">
                <div className="wrapper__border top__wrapper-contact flex-1"></div>
                <div className="wrapper__border-top bg-black flex flex-col gap-[40px] p-[1em]">
                    <h1 className="fancy__contacttext text-white">Book Online</h1>
                    <label className="weight-500 text-white">Book Your Appointment Today</label>
                    <div className="flex h-[80px]">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;