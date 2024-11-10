import React from "react";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";
import ScrollButton from './ScrollButton';


const Home = () =>{
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-centre">
                        <div className="col-md-8 mt-5 text-center">
                            <h1 className="display-4 fw-bolder mb-50 ">    PARK SMART , SAVE TIME ! </h1>
                            <p className="lead fs-4 mb-5">  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Quidem autem ratione libero, fugit omnis esse temporibus necessitatibus et dignissimos sint non accusamus ipsam quae error nesciunt maiores magni magnam repellendus.</p>
                                <div className="buttons d-flex 
                                justify-content-center">
                                    <NavLink to="/contact" className="btn btn-light me-4 
                                    square-box px-4 py-2 "> Get Help</NavLink>
                                     <NavLink to="/service" className="btn btn-light me-4 
                                    square-box px-4 py-2"> Our Services</NavLink>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
            <About/>
            <Services/>
            <Contact/>

      </div>

    );
}
export default Home;