import React from "react";
import one from "../Assets/one.svg";
import logo1 from "../Assets/logo1.svg";
import LabelImportantTwoToneIcon from "@material-ui/icons/LabelImportantTwoTone";
import ".././css/style1.css";
function Home() {
  return (
    <>
      <div
        style={{ background: "gray" }}
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators"></div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={one}
              className="d-block w-100"
              alt="bg1"
              id="imagess"
              style={{ width: "35rem", height: "35rem" }}
            />
            <div className="carousel-caption d-md-block" id="my">
              <img
                src={logo1}
                alt="logo"
                style={{ width: "15rem", height: "15rem" }}
              />
              <h1>World BANK</h1>
              <p>World Bank is the bank of your choice </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hs">
        <p className="hs1">
          {" "}
          <LabelImportantTwoToneIcon style={{ fontSize: "35px" }} />A bank is a
          financial institution licensed to receive deposits and make loans.
          Banks may also provide financial services such as wealth management,
          currency exchange, and safe deposit boxes. There are several different
          kinds of banks including retail banks, commercial or corporate banks,
          and investment banks. Banks are “special” because they manage the
          payment system through which most economic payments are made. They are
          the functional equivalent of the water company connecting the transfer
          of water to and from all of our homes.
        </p>
      </div>
    </>
  );
}

export default Home;
