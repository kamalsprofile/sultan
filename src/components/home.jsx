import React, { Component } from 'react';
import NavBar from './navbar'
import Banner from './banner';
import HomeContent from './home-content';


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="container">
                    <HomeContent />
                </div>
            </div>
        </div>
    );
}

export default Home;