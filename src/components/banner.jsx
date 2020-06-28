import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'

const Banner = () => {
    return (
        /* <div className="banner-area">
             <div className="banner-text"> <h2>Sultan <span className="banner-text-secondary">Shawarma</span></h2>
                 <Link className="cta-btn" to="/menu">See Menu</Link>
             </div>
 
         </div> */
        /*    <div>
    
    
                <div id="myCarousel" class="carousel carousel-fade slide" data-ride="carousel" data-interval="1000">
                    <div class="carousel-inner" role="listbox">
                        <div class="item active background a"></div>
                        <div class="item background b"></div>
                        <div class="item background c"></div>
                    </div>
                </div>
    
                <div class="covertext">
                    <div class="col-lg-10" style={{ float: "none", margin: "0" }}>
                        <h1 class="title">ELINE</h1>
                        <h3 class="subtitle">A Tidy, Clean, Easy-to-Use, and Responsive Landing Page Template</h3>
                    </div>
                    <div class="col-xs-12 explore">
                        <a href="#"><button type="button" class="btn btn-lg explorebtn">EXPLORE</button></a>
                    </div>
                </div>
            </div> */
        <div class="banner-area">
            <div class="banner-text"> <h1 >Sultan <span className="banner-text-secondary">Shawarma</span></h1>
                <Link className="cta-btn" to="/menu"> See Our Menu</Link>
            </div>
            <video autoplay="autoplay" muted="muted" loop="loop" className="header-video">
                <source src="/shawarma-1.mp4" type="video/mp4" />
            </video>
        </div>

    );
}

export default Banner;