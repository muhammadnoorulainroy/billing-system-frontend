import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignupData } from "../../api";
import { isValidEmail, isValidFullname } from "./validations";

export default function Signup() {
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [validFullname, setValidFullname] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [signupData, setSignupData] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevState) => {
      return { ...prevState, [name]: value };
    });
    setError("");
    setIsError(false);
    if (name === "email") setValidEmail(isValidEmail(value));
    else if (name === "password") setValidPassword(value.length >= 8);
    else if (name === "fullname") setValidFullname(isValidFullname(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postSignupData(signupData)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data);
        navigate("/plans");
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
        setError(err.response.data.error);
      });
  };

  return (
    <div className="wrapper">
      <div className="form-content">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            required={true}
            minLength={4}
            maxLength={25}
            value={signupData.fullname}
            onChange={handleChange}
          />
          {!validFullname && (
            <div className="alert alert-danger m-2 w-75 text-center m-auto">
              Invalid Name
            </div>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            required={true}
            value={signupData.email}
            onChange={handleChange}
          />
          {!validEmail && (
            <div className="alert alert-danger m-2 w-75 text-center m-auto">
              Invalid Email
            </div>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            minLength={8}
            required={true}
            value={signupData.password}
            onChange={handleChange}
          />
          {!validPassword && (
            <div className="alert alert-danger m-2 w-75 text-center m-auto">
              Password must contain at least 8 characters
            </div>
          )}
          <select className="selectBox" name={"role"} onChange={handleChange}>
            <option selected disabled>
              Signup As
            </option>
            <option value={"admin"}>Admin</option>
            <option value={"buyer"}>Buyer</option>
          </select>
          <input
            className="submit"
            disabled={!validEmail || !validPassword}
            type="submit"
            value="Sign Up"
          />
          {isError && (
            <div className="alert alert-danger m-2 p-3 w-75 text-center m-auto">
              {error}
            </div>
          )}
        </form>
        <div className="form-footer">
          Already have account? <Link className="form-footer-link" to="/">Login</Link>
        </div>
      </div>
    </div>
  );
}
