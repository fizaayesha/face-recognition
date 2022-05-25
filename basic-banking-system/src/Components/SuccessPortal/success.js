import React from "react";
import * as Rbs from "react-bootstrap";
import "./success.css";
import Success from "../Assets/success.png";
import { useHistory } from "react-router-dom";

//success portal
const Successport = () => {
  const history = useHistory();

  const buttonHandler = (event) => {
    if (event.target.value === "Mainpage") {
      history.push("/mainpage");
    } else {
      history.push("/users");
    }
  };

  return (
    <div
      className="success-portal"
    >
      <Rbs.Card
        style={{ width: "20rem", height: "15rem" }}
        className="success-card"
        bg="secondary"
        text="light"
        border="dark"
      >
        <Rbs.Card.Body>
          <Rbs.Card.Img variant="top" src={Success} className="success" />
          <Rbs.Card.Title className="mb-2 mx-auto my-2 success-title">
            Transaction Successful
          </Rbs.Card.Title>
          <Rbs.Card.Text>
            Click on the 'Dashboard' button to navigate to Dashboard page or else Click on
            'More' button to make another transaction.
          </Rbs.Card.Text>
          <Rbs.Row>
            <Rbs.Col className="success-buttons" size="lg" mr="auto">
              <Rbs.Button
                variant="primary"
                value="Mainpage"
                onClick={(e) => buttonHandler(e)}
              >
                Dashboard
              </Rbs.Button>
            </Rbs.Col>
            <Rbs.Col size="lg" className="success-buttons" mr="auto">
              <Rbs.Button
                variant="dark"
                value="more"
                onClick={(e) => buttonHandler(e)}
              >
                More
              </Rbs.Button>
            </Rbs.Col>
          </Rbs.Row>
        </Rbs.Card.Body>
      </Rbs.Card>
    </div>
  );
};

export default Successport;
