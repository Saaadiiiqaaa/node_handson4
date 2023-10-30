
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'

function NewRegister() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    phonenumber: "",
    email: "",
    password: "",
  });
  const [store, setStore] = useState(null);
  const [error, setError] = useState(null);

  const handleButton = (e) => {
    e.preventDefault();
    // setStore({ ...data });
    // console.log(store,"store");
    // console.log("data", data);
    const { email, password } = data;
    const API = "https://register-login-api.onrender.com/user/register"
    
    setData({
      name: "",
      phonenumber: "",
      email: "",
      password: ""
    });
    if (email && password) {
      axios.post(API,data)
        .then(res => {
          // alert("user registered")
          setStore(res.data);
          navigate('/home');
        })
        .catch((err) => console.log(err));
    } else {
      setError("Please enter email and password.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="SignupCon">
      <div className="SignText">Sign up here</div>
      <div className="cardForm">
        <form className="SignupForm">
          <img
            className="lockImg"
            src="data:image/jpeg;base64,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"
            alt="Locked"
          />
          <input
            className="sInp"
            type="text"
            name="name"
            value={data.name}
            placeholder="Enter Your Name"
            onChange={handleChange}
            required
          />
          <input
            className="sInp"
            type="number"
            name="phonenumber"
            value={data.phonenumber}
            placeholder="Enter Your Phone Number"
            onChange={handleChange}
            required
          />
          <input
            className="sInp"
            type="email"
            name="email"
            value={data.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
            required
          />
          <input
            className="sInp"
            type="password"
            name="password"
            value={data.password}
            placeholder="Enter Your Password"
            onChange={handleChange}
            required
          />
          {error && <span style={{ color: "red" }}>{error}</span>}
          <button className="Sbutn" onClick={handleButton}>
            Signup
          </button>
          <div>
            <NavLink to="/user/login"> Already have an account? Sign in</NavLink>
          </div>
        </form>
      </div>

      <div className="homeBody">
        <img
          className="homeImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRkAOXrQeMluSvWcahldIyYt9M_czdH83YVNYAuX_CxLEwAfT0pvmX4_bkQPRWJQNjIhg&usqp=CAU"
          alt="no img"
        />
      </div>
    </div>
  );
}

export default NewRegister;
