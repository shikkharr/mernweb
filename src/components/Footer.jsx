import React from "react";

const Footer = () => {
    return (
           
        <div class="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-2 my-2 border-top">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32">n</svg>
      </a>
      <p class="text-body-secondary">© 2024 Company, Inc. All Rights Reserved.</p>
      <ul className="list-unstyled-d-flex">
        <li className="ms-3">
            <a href="#" className="link-light">
                <i className="fa fa-facebook fa-2x"></i>
            </a>
        </li>
        <li className="ms-3">
            <a href="#" className="link-light">
                <i className="fa fa-instagram fa-2x"></i>
            </a>
        </li>
        <li className="ms-3">
            <a href="#" className="link-light">
                <i className="fa fa-twitter fa-2x"></i>
            </a>
        </li>
      </ul>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32">n</svg>
      </a>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>
  </footer>
</div>
        
    );
}

export default Footer