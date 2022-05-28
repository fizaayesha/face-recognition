// Transaction history of every customer

import React, { useState, useEffect } from "react";
import "./Transactions.css";
import axios from "axios";
// import * as Reactbootstrap from 'react-bootstrap';
import avatar from "../Assets/use-avatar.svg";

//Transaction history page
const Transactions = () => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/transactions`)
      .then((res) => setTransaction(res.data))
      .catch((err) => console.log(err));
  }, [transaction]);
  return (
    <>
      <div className="users">
        <div className="user">
          {transaction.map((trans) => (
            <div className="body" key={trans.username}>
              <img src={avatar} alt="avatar" style={{ width: "10rem" }} />
              <div className="box">
                <h6>
                  Sender:
                  {trans.sender}
                </h6>
                <h6>Receiver: {trans.receiver}</h6>
                <h6>Amount: Rs. {trans.amount}</h6>
                <h6>Date: {trans.date}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Transactions;
