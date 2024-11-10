import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
    return(
        <div>
             <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column align-items-center justify-content-center form order-2">
            <h1 className="display-4 fw-bolder ">
                <i className="fal fa-parking"></i>Let's Park !</h1>
            <p className="lead text-center">Enter Your Details to Register.</p>
            <h5 className="mb-4 ">OR</h5>
            <NavLink
              to="/login"
              className="btn btn-outline-dark rounded-pill pb-2 w-50"
            >
              Login{" "}
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">REGISTER </h1>
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                />

              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  I agree to all T&C.
                </label>
              </div>
              <button type="submit" class="btn btn-outline-primary w-100 mt-4">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
}

export default Register;