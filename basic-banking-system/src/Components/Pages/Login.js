import React, { useState } from "react";
import login from "../Assets/Login.svg";
import "./Contact/Contact.css";
import { useHistory } from "react-router";
function Login() {
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  //handle input
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  //handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = user;
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("Invalid Credentials");
      } else {
        window.alert("LoggedIn succefully");
        // history.push("/profile");
        history.push({ pathname: `/profile`, state: { user: user } });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="carousel slide" id="body" style={{ background: "gray" }}>
        <div className="contact">
          <div className="card" style={{ width: "26rem", borderRadius: "50%" }}>
            <img src={login} className="card-img-top" alt="" />
          </div>
          <div className="contform">
            <form onSubmit={handleSubmit}>
              <div className="inputt">
                <label htmlFor="name" className="form-label"></label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder="Username"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                />
              </div>
              <div className="inputt">
                <label htmlFor="password" className="form-label"></label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Must include special characters eg. #$* etc."
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <br />
              <div className="inputt">
                <button
                  type="submit"
                  className="btn rounded-pill"
                  id="btns"
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
