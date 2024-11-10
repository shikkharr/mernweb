import React from 'react';

const About = () =>{
    return (
        <div>
                 <section id="home">
                    <div className="scrollIntoView">
                <div className="container my-5 py-5 ">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/assets/logo.png" alt="About" className="w-60 mt-5 "/>
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2">Who We Are</h1>
                            <hr className=" w-50 "/>
                            <p className="lead mb-4">Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. Debitis necessitatibus vel molestiae
                                 blanditiis autem nostrum magnam aliquid dolor eligendi ad.</p>
                                 <button className="btn btn-primary rounded-pill px-4 py-2">Get Started </button>
                                 <button className="btn btn-primary rounded-pill px-4 py-2 ms-2">Contact Us </button>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>

    );
}

export default About;