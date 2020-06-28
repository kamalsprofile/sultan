import React, { Component } from 'react';
import Map from "./map";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
    return (
        <div class="footer-content">
            <footer id="myFooter">
                <div class="first-bar">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4" style={{ textAlign: "center" }}>
                                <h5>Who we are</h5>
                                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
                                     placeat accusamus minus assumenda ab earum optio molestiae porro, nulla quibusdam,
                                     voluptatibus veniam sequi soluta ad adipisci iusto exercitationem voluptas maxime.</p>
                            </div>
                            <div class="col-sm-4" style={{ textAlign: "center" }}>
                                <h5>Site Map</h5>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Menu</a></li>
                                    <li><a href="#">Contact us</a></li>
                                    <li><a href="#">About</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-4" style={{ textAlign: "center" }}>
                                <h5>Find Us</h5>
                                <ul>
                                    <li className="map-container">

                                        <Map className="google-map" />
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <section id="lab_social_icon_footer">


                                    <div class="container">
                                        <div class="text-center center-block">
                                            <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
                                            <a href="https://twitter.com/bootsnipp"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
                                            <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
                                            <a href="mailto:#"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div class="second-ba">
                    <div class="copy-right-section container">

                        <div style={{ textAlign: "center", color: "rgb(128,128,128)" }}>
                            <p>
                                © Copyright {new Date().getFullYear()} Sultan. All rights reserved.</p>
                        </div>






                    </div>
                </div>
            </footer>
        </div>

    );
}

export default Footer;