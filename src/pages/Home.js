import React from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Service from "../components/Service";
import Contact from "../components/Contact";
import '../assets/css/home.css';

function Home() {
    return (
        <main className="home w-screen overflow-hidden">
            <Hero />
            <Gallery />
            <Service />
            <Contact />
        </main>
    )
}

export default Home;