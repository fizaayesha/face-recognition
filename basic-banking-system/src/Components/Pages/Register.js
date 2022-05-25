import React, { useState } from "react";
import create from "../Assets/create.svg";
import "./Contact/Contact.css";
import { useHistory } from "react-router";
function Register() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    account: "",
    phone: "",
    adhaar: "",
    email: "",
    username: "",
    password: "",
    amount: "",
  });

  //HANDLE INPUT
  const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  //handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    //object destructing
    //store object data into variable
    const { name, account, phone, adhaar, email, username, password, amount } =
      user;
    try {
      //it is submitted on port 3000 by default
      //which is frontend but we need to submit
      // it on backend which is on port 5000
      //So, we need  proxy
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          account,
          phone,
          adhaar,
          email,
          username,
          password,
          amount,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("Something went wrong,fill the credentials again");
      } else {
        window.alert("Registerd succefully");
        history.push("/login");
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
            <img src={create} className="card-img-top" alt="..." />
          </div>
          <div className="contform">
            <form onSubmit={handleSubmit} method="POST">
              <div className="inputt">
                <label htmlFor="name" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your name"
                  name="name"
                  value={user.name}
                  onChange={handleInput}
                />
              </div>
              <div className="inputt">
                <label htmlFor="account" className="form-label"></label>
                <input
                  type="number"
                  className="form-control"
                  id="account"
                  placeholder="Acount No."
                  name="account"
                  value={user.account}
                  onChange={handleInput}
                />
              </div>
              <div className="inputt">
                <label htmlFor="phone" className="form-label"></label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Mobile Number"
                  name="phone"
                  value={user.phone}
                  onChange={handleInput}
                />
              </div>
              <div className="inputt">
                <label htmlFor="phone" className="form-label"></label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Adhaar Number"
                  name="adhaar"
                  value={user.adhaar}
                  onChange={handleInput}
                />
              </div>
              <div className="inputt">
                <label htmlFor="email" className="form-label"></label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div className="inputt">
                <label htmlFor="username" className="form-label"></label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div className="inputt">
                <label htmlFor="password" className="form-label"></label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Must include special characters eg. #$&* etc."
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div className="inputt">
                <label htmlFor="number" className="form-label"></label>
                <input
                  type="number"
                  className="form-control"
                  id="number"
                  placeholder="Enter the amount you want to keep safe in your account"
                  name="amount"
                  value={user.amount}
                  onChange={handleInput}
                />
              </div>
              <div className="inputt">
                <button
                  type="submit"
                  className="btn rounded-pill"
                  id="btns"
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Copyright &copy; 2022 World Bank</p>
      </div>
    </>
  );
}

export default Register;
