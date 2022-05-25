import React from "react";
import { NavLink } from "react-router-dom";
import Transfer from "../Assets/Transafer.svg";
import users from "../Assets/pay.svg";
import about from "../Assets/box2.svg";
import instruc from "../Assets/contact.svg";
import ".././css/style1.css";
function MainPage() {
  return (
    <>
      <div className="blog">
        <div className="blogList">
          <div className="blogItem">
            <img src={users} alt="..." id="uni" />
            <h3>Users</h3>
            <p>Users can check their available amount here</p>
            <NavLink
              to="/users"
              className="btn btn-dark ms-auto px-3 rounded-pill fw-bold"
              id="btn1"
              type="submit"
            >
              Users
            </NavLink>
          </div>
        </div>
        <div className="blogList">
          <div className="blogItem">
            <img src={Transfer} alt="..." id="uni" />
            <h3>Transactions</h3>
            <p>Users can to their transactions from here</p>
            <NavLink
              to="/transactions"
              className="btn btn-dark ms-auto px-3 rounded-pill fw-bold"
              id="btn1"
              type="submit"
            >
              Transactions
            </NavLink>
          </div>
        </div>
        <div className="blogList">
          <div className="blogItem">
            <img src={about} alt="..." id="uni" />
            <h3>Instructions</h3>
            <p>
              If you want to read instructions again then logout this session
              read instructions and login again.
            </p>
            <NavLink
              to="/about"
              className="btn btn-dark ms-auto px-3 rounded-pill fw-bold"
              id="btn1"
              type="submit"
            >
              About
            </NavLink>

          </div>
        </div>
        <div className="blogList">
          <div className="blogItem">
            <img src={instruc} alt="..." id="uni" />
            <h3>About</h3>
            <p>
              Wanna know more about world bank?? Then logout this session go
              through about section and login again.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Copyright &copy; 2022 World Bank</p>
      </div>
    </>
  );
}

export default MainPage;
