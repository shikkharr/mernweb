import React from 'react';

const Services = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">What We Do ?</h3>
                            <h1 className="display-6 text-center mb-4">Our Awesome Services</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                <i className="fa fa-car fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Park Nearby</h5>
                                    <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Park Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                    <i className="fa fa-phone fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Valet Parking</h5>
                                    <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Call Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3">
                                <div className="card-body text-center">
                                    <i className="fa fa-calendar fa-4x mb-4 text-primary"></i>
                                    <h5 className="card-title mb-3 fs-4 fw-bold">Schedule Parking</h5>
                                    <p className="card-text lead">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
