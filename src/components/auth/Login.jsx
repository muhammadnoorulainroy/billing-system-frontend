import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import dashboardImg from "../../assets/images/dashboard.svg";
import { isValidEmail } from "./validations";
import { postLoginCredentials } from "../../api";

import "./Auth.css";

export default function Login() {


  const [validEmail, setValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevState) => {
      return { ...prevState, [name]: value };
    });
    setError("");
    setIsError(false);
    if (name === "email") setValidEmail(isValidEmail(value));
    else setIsValidPassword(value.length >= 8);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postLoginCredentials(loginDetails)
      .then((res) => {
        localStorage.setItem("token", res.data);
        navigate("/plans");
      })
      .catch((err) => {
        setIsError(true);
        setError(err.response.data.error);
      });
  };

  return (
    <div className="wrapper">
      <div className="form-content">
        <h2>Log in</h2>
        <div>
          <img
            src={dashboardImg}
            id="icon"
            alt="User Icon"
            height={200}
            width={200}
          />
        </div>
        <form onSubmit={handleSubmit} method="post">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required={true}
            value={loginDetails.email}
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
            value={loginDetails.pass}
            onChange={handleChange}
          />
          {!isValidPassword && (
            <div className="alert alert-danger m-2 w-75 text-center m-auto">
              Password must contain at least 8 characters
            </div>
          )}
          {isError && (
            <div className="alert alert-danger m-2 p-3 w-75 text-center m-auto">
              {error}
            </div>
          )}
          <input
            className="submit"
            disabled={!validEmail || !isValidPassword}
            type="submit"
            value="Sign In"
          />
        </form>
        <div className="form-footer">
          Do not have account? <Link className="form-footer-link" to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
}
