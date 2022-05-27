import React, { useState, useEffect } from "react";
// import * as Reactbootstrap from "react-bootstrap";
import "./User-content.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import avatar from "../Assets/use-avatar.svg";

const Userdets = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
    .get(`${process.env.REACT_APP_SERVER_URL}/customers`)
    .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  let history = useHistory();
  const transferhandler = (Id) => {
    // console.log(users);
    history.push({ pathname: `/transfer/${Id}`, state: { users: users } });
  };

  return (
    <>
      <div className="users">
        <div className="user">
          {users.map((user) => (
            <div className="body" key={user.customerId}>
              <img src={avatar} alt="avatar" style={{ width: "10rem" }} />
              <div className="box">
                <h6>Customer Id: {user.customerId}</h6>
                <h6>
                  Name:
                  {user.firstname} {user.lastname}
                </h6>
                <h6>Email: {user.email}</h6>
                <h6>Amount: Rs. {user.balance}</h6>
                <button
                  className="but"
                  id={user.id}
                  onClick={() => transferhandler(user._id)}
                >
                  Transfer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Userdets;
