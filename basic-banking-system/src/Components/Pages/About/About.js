import React from "react";
import about1 from "../../Assets/about1.svg";
import about3 from "../../Assets/about3.svg";
import about2 from "../../Assets/about2.svg";
import { AboutList } from "./AboutList";
import AboutItem from "./AboutItem";
import "../../css/style1.css";
function About() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={about1}
              className="d-block w-100"
              alt="about1"
              style={{ width: "36rem", height: "36rem" }}
            />
            <div className="carousel-caption d-md-block">
              <h5>Credit Card</h5>
              <p>Credit Card is safer than carrying cash</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={about2}
              className="d-block w-100"
              alt="about2"
              style={{ width: "36rem", height: "36rem" }}
            />
            <div className="carousel-caption d-md-block">
              <h5>World BANK Life Insurance</h5>
              <p>
                World BANK provide funds for your kids' school or college
                education
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={about3}
              className="d-block w-100"
              alt="about3"
              style={{ width: "36rem", height: "36rem" }}
            />
            <div className="carousel-caption d-md-block">
              <h5>World BANK, quick process</h5>
              <p>
                With large number of employees in our bank, customers not have
                to wait for very long for their work
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="blog">
        <div className="blogList">
          {AboutList.map((blogItem, key) => {
            return (
              <AboutItem
                key={key}
                image={blogItem.image}
                title={blogItem.title}
                text={blogItem.text}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default About;
