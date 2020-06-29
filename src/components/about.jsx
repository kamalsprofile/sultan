import React, { Component } from 'react';


const About = () => {
    return (
        <div className="container">
            <div className="margened-top-text">
                <h1 class="second" style={{ marginBottom: "60px" }} ><span>Who are we</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur architecto,
                         illo quas ad praesentium fugit adipisci pariatur
                         reprehenderit repellendus minima modi delectus at optio culpa corporis commodi cum nobis eaque.

                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, perferendis animi ab totam
                          rerum id distinctio. Cumque esse
                          reprehenderit amet accusamus accusantium eaque. Delectus molestiae nobis atque voluptates nihil accusamus?
             </p>
            </div>
            <div className="owners margened-top-text">


                <h1 class="second" ><span>Meet the owners</span></h1>

                <div className="row" style={{ margin: "100px" }}>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "center" }}>
                        <div class="blog">
                            <div class="title-box">
                                <h3 style={{ color: "rgb(212, 175, 55)" }}>Mohamad</h3>

                                <div class="intro">Grundlægger Og Ansvarlig For Samarbejde</div>
                            </div>
                            <div class="info">
                                <p>
                                    Allan er ansvarlig for samarbejdet med eksterne partnere - private
                                    som kommunale - og elsker at netværke. Han elsker at få en SMS når
                                    han er optaget og er elendig til at aflytte sin telefonsvarer, men
                                    tag endelig kontakt, han venter dit opkald.
  </p>
                            </div>


                            <div class="color-overlay" />

                        </div>

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div class="nicolineBlog">
                            <div class="title-box">
                                <h3 style={{ color: "#d0bc57" }}>Nicoline B.Sørensen</h3>

                                <div class="intro">Ansvarlig For WORK BUDDY og IGU Processerne</div>
                            </div>
                            <div class="info">
                                <p>
                                    Nicoline har helikopter perspektiv i sin tilgang og fungerer bedst, når der er fart over feltet. Fantastiske input og værdsat humor og latter. Uvurderlig kollega med et servicegen udover det sædvanlige.         </p>
                            </div>

                            <div class="color-overlay" />
                        </div>
                        <div >
                            <p style={{ textAlign: "center", marginTop: "25px" }}>

                                <a
                                    href="mailto:nbs@startigu.nu"
                                    style={{ color: "#d000d7", margin: "10px" }}
                                >
                                    <i class="fa fa-at fa-2x" />{" "}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
