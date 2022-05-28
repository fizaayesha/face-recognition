import React, { useEffect } from "react";
import { useHistory } from "react-router";
function Logout() {
  const history = useHistory();
  const logout = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/logout`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        // credentials: "include",
      });
      if (res.status === 401 || !res) {
        window.alert("Please logout later");
      } else {
        history.push("/");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    logout();
  }, []);
  return <div></div>;
}

export default Logout;