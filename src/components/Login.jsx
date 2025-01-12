import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="container shadow my-5">
        <div className="row mt-5">
          <div className="col-md-5 d-flex flex-column align-items-center justify-content-center form ">
            <h1 className="display-4 fw-bolder"> Welcome Back ! </h1>
            <p className="lead text-center">Enter Your Credentials to Login.</p>
            <h5 className="mb-4 ">OR</h5>
            <NavLink
              to="/register"
              className="btn btn-outline-dark rounded-pill pb-2 w-50"
            >
              Register{" "}
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                Remember Me
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-4">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
