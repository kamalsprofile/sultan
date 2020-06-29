import React, { Component } from 'react';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        }
    }

    render() {
        const { status } = this.state;
        return (

            <div className="container">
                <div className="margened-top-text">
                    <div className="fast-contact" style={{ marginBottom: "40px" }}>
                        <h2>Quick contact</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ullam optio asperiores vel ratione,
                            rerum perferendis eius explicabo quia sit
                        veritatis modi unde suscipit? Deleniti saepe magni eaque quam ut!</p>

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

                    <h2>Send us a mail if you have any question</h2>
                    <form className="contact-form" onSubmit={this.submitForm} action="https://formspree.io/mqkydklk" method="POST">
                        <div class="form-group ">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your name" name="username" />
                        </div>
                        <div class="form-group ">
                            <label for="exampleFormControlInput1">Phone</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your number" name="number" />
                        </div>
                        <div class="form-group ">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" ></textarea>
                        </div>
                        {status === "SUCCESS" ? <p>Thanks for patronizing!</p> : <button onClick={this.formSubmitted} className="btn btn-lg btn-primary">Submit</button>}
                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                    </form>

                </div>
            </div>

        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}

export default ContactUs;