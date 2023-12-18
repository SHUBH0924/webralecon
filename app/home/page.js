"use client";
import React from 'react'
import NavbarSection from '../components/Navbar';
import Footer from '../components/Footer';

import "bootstrap/dist/css/bootstrap.min.css";
import Banner from '../components/Banner';
import HomeContent from '../components/HomeContent';

function Home() {
    return (
        <div>
            <NavbarSection />
            <Banner />
            <HomeContent/>
            <Footer />
        </div >
    )
}

export default Home
