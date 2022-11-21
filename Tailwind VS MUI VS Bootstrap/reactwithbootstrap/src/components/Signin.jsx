import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signin.css";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="border w-25 mx-auto mt-5 ">
        <div className="text-center">
          <h4 className="text h5 py-3">Sign In</h4>
        </div>

        <div className="mx-5">
          <label for="exampleInputEmail1" className="form-label mt-1">
            Email
          </label>
          <input
            type="email"
            className="form-control my-2"
            placeholder="Enter Email Here"
          ></input>
        </div>

        <div className="mx-5">
          <label for="exampleInputEmail1" className="form-label mt-1">
            Password
          </label>
          <input
            type="password"
            className="form-control my-2"
            placeholder="Enter Password Here"
          ></input>
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate("/product")}
            className="btn btn-primary btn-sm my-3 px-3"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Signin;
