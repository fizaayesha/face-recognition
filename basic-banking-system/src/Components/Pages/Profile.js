import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/User-content.css";
function Profile() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/profile`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  let history = useHistory();
  const transferHAndler = (username) => {
    // console.log(users);
    history.push({
      pathname: `/transfer/${username}`,
      state: { users: users },
    });
  };
  console.log(users);
  return (
    <>
      <div className="users">
        <div className="user">
          {users.map((user) => (
            <div className="body">
              <div className="box">
                <h6>Name: {user.name}</h6>
                <h6>
                  Account No:
                  {user.account}
                </h6>
                <h6>Phone No: {user.phone}</h6>
                <h6>Adhaar: {user.adhaar}</h6>
                <h6>Email: {user.email}</h6>
                <h6>Username: {user.username}</h6>
                <h6>Amount: Rs. {user.amount}</h6>
                <button
                  className="but"
                  id={user.id}
                  onClick={() => transferHAndler(user._id)}
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
}

export default Profile;
