import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../Userdetails/User-content.css";
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
    history.push({ pathname: `/transfer/${username}`, state: { users: users } });
  };
  console.log(process.env.REACT_APP_SERVER_URL);
  return (
    <>
      <div className="users">
        <div className="user">
          {users.map((user) => (
            <div className="body" key={user.username}>
              <div className="box">
                <h6>Name: {user.name}</h6>
                <h6>
                  Account No:
                  {user.account}
                </h6>
                <h6>Phone No: {user.phone}</h6>
                <h6>Adhaar: Rs. {user.adhaar}</h6>
                <h6>Email: Rs. {user.email}</h6>
                {/* <h6>Username: Rs. {user.username}</h6> */}
                {/* <h6>Password: Rs. {user.password}</h6> */}
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
      <div className="footer">
        <p>Copyright &copy; 2022 World Bank</p>
      </div>
    </>
  );
}

export default Profile;
