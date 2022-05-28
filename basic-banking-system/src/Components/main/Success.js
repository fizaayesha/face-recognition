import React from "react";
import { Link } from "react-router-dom";
import "./style/style.css";
import "./style/style.css.map";
import "./style/style.scss";

function Success(props) {
  return (
    <main className="result" id="success">
      <h1>{props.message}</h1>
      <h2>Successfully authenticated, The user may now proceed</h2>
      <div className="main">
        <Link to="/profile">
          <button
            type="submit"
            className="btn rounded-pill"
            id="btns"
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
          >
            GO to Profile
          </button>
        </Link>
        <Link to="/register">
          <button
            type="submit"
            className="btn rounded-pill"
            id="btns"
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
          >
            Create new user
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Success;
