import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import ProtectedRoutes from "./ProtectedRoutes";
import About from "./Components/Pages/About/About";
import Home from "./Components/Pages/home";
import Instructions from "./Components/Pages/Instructions/Instructions";
import Contact from "./Components/Pages/Contact/Contact";
import Login from "./Components/Pages/Login";
import Logout from "./Components/Pages/Logout";
import Register from "./Components/Pages/Register";
// import MainPage from "./Components/Pages/MainPage";
import Userdets from "./Components/Userdetails/User-content";
import Transactions from "./Components/TransactionHistory/Transactions";
import Transfer from "./Components/TransferAmount/Transfer";
import Successport from "./Components/SuccessPortal/success";
import Profile from "./Components/Pages/Profile";

function App() {
  //check if user is logged in
  const [auth, setAuth] = useState(false);
  const [auth1, setAuth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/auth`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // credentials: "include",
      });
      if (res.status === 200) {
        setAuth(true);
        setAuth1(false);
      }
      if (res.status === 401) {
        setAuth(false);
        setAuth1(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <Router>
      <Navbar auth={auth1} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/instructions" exact component={Instructions} />
        <Route path="/contact" exact component={Contact} />
        <ProtectedRoutes path="/login" exact component={Login} auth={auth1} />
        <ProtectedRoutes path="/register" exact component={Register} auth={auth1}/>
        <ProtectedRoutes path="/transactions" exact component={Transactions} auth={auth1}/>
        <ProtectedRoutes path="/logout" exact component={Logout} auth={auth} />
        <ProtectedRoutes path="/users" exact component={Userdets} auth={auth1}/>
        <ProtectedRoutes path="/transfer/:id" exact component={Transfer} auth={auth1}/>
        <ProtectedRoutes path="/success" exact component={Successport} auth={auth1}/>
        {/* <ProtectedRoutes path="/mainpage" exact component={MainPage} auth={auth1}/> */}
        <ProtectedRoutes path="/profile" exact component={Profile} auth={auth1}/>
      </Switch>
    </Router>
  );
}

export default App;
//we cant access them if auth is false
