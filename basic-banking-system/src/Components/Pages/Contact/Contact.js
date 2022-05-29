import React, { useState } from "react";
import contact from "../../Assets/contact.svg";
import "./Contact.css";
function Contact() {
  const [msg, setMsg] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setMsg({ ...msg, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //object destructing
    //store object data into variable
    const { name, phone, email, message } = msg;
    try {
      //it is submitted on port 3000 by default
      //which is frontend but we need to submit
      // it on backend which is on port 5001
      //So, we need  proxy
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("Message not sent, try again later");
      } else {
        window.alert("Message Sent");
        setMsg({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
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
            <img src={contact} className="card-img-top" alt="..." />
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
                  value={msg.name}
                  onChange={handleChange}
                />
              </div>
              <div className="inputt">
                <label htmlFor="phone" className="form-label"></label>
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Mobile No."
                  name="phone"
                  value={msg.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="inputt">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                ></label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                  value={msg.email}
                  onChange={handleChange}
                />
              </div>
              <div className="inputt">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                ></label>
                <textarea
                  placeholder="Write your queries here"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={msg.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <br />
              <div className="inputt">
                <button
                  type="submit"
                  className="btn rounded-pill"
                  id="btns"
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
