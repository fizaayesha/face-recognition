import axios from "axios";

export const updateHandler = (sender, receiver, amount) => {
  console.log(sender);
  console.log(receiver);
  console.log(amount);
  const transHistory = {
    // transactionId: Number(
    //   String(sender.customerId) + String(receiver.customerId)
    // ),
    sender: `${sender.name}`,
    receiver: `${receiver.name}`,
    amount: Number(amount),
  };
  console.log(transHistory);

  //update the transaction history
  axios
    .post(`${process.env.REACT_APP_SERVER_URL}/transactions/add`, transHistory)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  //update the userdetails
  axios
    .post(
      `${process.env.REACT_APP_SERVER_URL}/register/update/${sender._id}`,
      sender
    )
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  //update receiver in userdetails
  axios
    .post(
      `${process.env.REACT_APP_SERVER_URL}/register/update/${receiver._id}`,
      receiver
    )
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};
