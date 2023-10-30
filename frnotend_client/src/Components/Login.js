
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // console.log(data);
  };

  const handleButton = (e) => {
    e.preventDefault();
    const { email, password } = data;
    const API = "https://register-login-api.onrender.com/user/login";
    // console.log("working");
    // navigate("/home");
    if (email && password) {
      axios.post(API, data)
        .then((res) => {
          console.log(res.data);
          if(res.data!=="wrong password"){
          navigate("/home");
          }else{
            setError("wrong password.");
          }
        })
        .catch((err) => console.log(err));
    }
    else {
      setError("Please enter correct email and password.");
    }
  };

  const handleBackBtn = ()=>{
    navigate("/")
  }

  return (
    <div>
      <button onClick={handleBackBtn} className="backButtn">Back</button>
      <div className="loginText">Login here</div>
      <div className="loginForm">
        <div className="logComCon">
          
          <img
            className="lockImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnEm0sRyfO8QttWhmnLjK_aZzXDivzyNuarg&usqp=CAU"
            alt="Locked"
          />
          <div className="Logcont1">
           
            <input
              className="lLoginInp"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="Logcont2">
            
            <input
              className="lLoginInp"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <span className="errMsg">{error}</span>}
          <button className="Sbutn" onClick={handleButton}>
            Login
          </button>
        </div>
      </div>
      <div className="homeBody">
        <img
          className="homeImg"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgICAcICAgHBwcHBwoHBwcHBw8ICQcKFREWIiAREx8YKCggGBolGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDysZFRkrKy0tNy0rLSsrKzcrKy0rKysrKy0tKysrKysrKysrKystKysrKysrKysrKysrKysrK//AABEIALwBDQMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAAIEAwf/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAZAQEBAQEBAQAAAAAAAAAAAAACAAEFAwT/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APqaSF0ygkikmJJFMSSYxFJakQWMMQMTLWoWWmhaYYC0bSWSgpISYUkhKCS0oIRISSSSScSBN0kkkkUmMRBYxJJjCkkwpJDajEUNpISG1pAkJhEMQ0xBRo2opMFJJIoFiSSSSSYnEgTdJEJjCkmMRSYKIKSSSG0pJDpIKG1EFoKNRmGNZa0gUNKBaJQKSS1MSSTKkQmMKSTXCQW66SIS1hSTBpSTGJJNG0kFCiEwaVAYhpILRqIMISQmjaiEmNIJIoJiKSSKBZiRCS1wkRC6bSCTCQUFSSiGlJIaUkhpSSGogoSQig2kswtG0oFolApiMBSSSSSSYkQk0rQknGknm6lRBQ0oFBVCChpQhQ1EFo2owGIKiChqSiISQmjSQmsOrQomaSElpQSWkspJpDVqWlBJa40C8XVpSSEpJBSkmiSIkFKBQ0xJNGlAtGlBENJBaKQLWFBNZpSTEiExmlBJaUkm6kkk40JVr53VrRZhaBUoSGtFkoSkmjSgUNJCIKSyUNKCIWkEQ0oFrCgmjpSSZqSSWos6tWIrVq1Yjo0atWLXIgXx669MITdGksloVpAoadQTRpILRJCIajAYhKBKDSgigEhNZSgmiUEmaQlrWakNWpmlaNWpurVoDVrmMZ1a52uva3qZ0t1jSjOmUtFosnW6NJZLRrUQJAUE0aTAmsJEJQKiCUFEJsCkJENqWgLB06giYUFqxIarWdbi1rVrGrVi14JkuVrs1oyswtgkxmUkxpCVNg1qFklBrRZJCSE2DSQiZWogSgUoEnnSgmwakKjCpaKmwStGhq1Wi1VmtxmnRoZ0sZrVrOi0Nxa8yyXC12mtOsGHKxoxkwmEgkNJEJMJgRQWkIWwaSCcGlJFApSgIKUkUedSQpBUNQIdWi0WgmWm0aKzWxmm1i01mlItOs2igpFr/9k="
          alt="no img"
        />
      </div>
    </div>
  );
}

export default Login;
