import React, { useState } from "react";
import * as Reactbootstrap from "react-bootstrap";
import "./Transfer.css";
import Avatar from "../Assets/use-avatar.svg";
import { useHistory } from "react-router-dom";
import { updateHandler } from "./updateHandler";
//create a fuction to fetch and update info accordingly.

const Transfer = (props) => {
  const history = useHistory();

  //Customer-Details, senderID, RecepientID, Amount states
  const [customs] = useState(props.location.state.users);
  const [receiver, setReceiver] = useState("select recepient");
  const [amount, setAmount] = useState("Entered amount");
  const [sender] = useState(props.match.params.id);
  //Senders details
  const temp = customs.find((user) => user._id === props.match.params.id);

  //Amount input handler
  function amountHandler(event) {
    setAmount(event.target.value);
  }

  //Receipient selector handler
  function selectHandler(event) {
    setReceiver(event.target.value);
  }

  //transferamount
  const transferHandler = (s, r, a) => {
    const senderComps = customs.find((user) => user._id === s);
    const receiverComps = customs.find((user) => user._id === r);
    const transAmount = a;
    senderComps.amount = senderComps.amount - transAmount;
    receiverComps.amount = Number(receiverComps.amount) + Number(transAmount);
    updateHandler(senderComps, receiverComps, transAmount);
    history.push("/success");
  };

  return (
      <div className="transfer-card">
        <Reactbootstrap.Card style={{ width: "22rem", background: "gray" }}>
          <Reactbootstrap.Card.Img
            variant="top"
            src={Avatar}
            className="avatar"
            style={{ width: "10rem" }}
          />
          <Reactbootstrap.Card.Body>
            <Reactbootstrap.Card.Title>
              Name: {temp.name}
            </Reactbootstrap.Card.Title>
            <Reactbootstrap.Card.Title>
              Amount: ₹.{temp.amount}
            </Reactbootstrap.Card.Title>
            <Reactbootstrap.Form>
              <Reactbootstrap.Row className="contentrow">
                <Reactbootstrap.Col md="auto">
                  <Reactbootstrap.Form.Label>
                    <b>Enter Amount:</b>
                  </Reactbootstrap.Form.Label>
                </Reactbootstrap.Col>
                <Reactbootstrap.Col>
                  <Reactbootstrap.Form.Control
                    type="number"
                    placeholder="Enter Amount"
                    onChange={(event) => amountHandler(event)}
                  />
                </Reactbootstrap.Col>
              </Reactbootstrap.Row>
              <Reactbootstrap.Row className="contentrow">
                <Reactbootstrap.Col>
                  <Reactbootstrap.Form.Label>
                    <b>Transfer To:</b>
                  </Reactbootstrap.Form.Label>
                </Reactbootstrap.Col>
                <Reactbootstrap.Col md="auto">
                  <Reactbootstrap.Form.Control
                    className="sender"
                    as="select"
                    onChange={(e) => selectHandler(e)}
                    value={receiver}
                  >
                    <option>Select Recipient</option>
                    {customs.map((user) => (
                      <option key={user.username} value={user._id}>
                        {user.name}
                      </option>
                    ))}
                  </Reactbootstrap.Form.Control>
                </Reactbootstrap.Col>
              </Reactbootstrap.Row>
              <Reactbootstrap.Row className="contentrow">
                <Reactbootstrap.Col>
                  <Reactbootstrap.Button
                    className="Buttons"
                    onClick={() => history.push("/profile")}
                    variant="primary"
                  >
                    Go Back
                  </Reactbootstrap.Button>
                </Reactbootstrap.Col>
                <Reactbootstrap.Col>
                  <Reactbootstrap.Button
                    className="Buttons"
                    onClick={() => transferHandler(sender, receiver, amount)}
                    variant="dark"
                  >
                    Transfer
                  </Reactbootstrap.Button>
                </Reactbootstrap.Col>
              </Reactbootstrap.Row>
            </Reactbootstrap.Form>
          </Reactbootstrap.Card.Body>
        </Reactbootstrap.Card>
      </div>
  );
};

export default Transfer;
