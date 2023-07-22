import React, { useContext, useState } from "react";
import classes from "./Login.module.css";
import AuthContext from "../context/AuthContext";
import { useLocation } from "react-router-dom";

function Login(props) {
  const [error, setError] = useState();
  let { loginUser } = useContext(AuthContext);

  async function login(e) {
    e.preventDefault();
    let response = await fetch("http://localhost:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();

    if (response.status != 200) {
      setError("Wrong username or password");
    } else {
      loginUser(data);
    }
  }

  return (
    <>
      <modal className={classes.container}>
        <form onSubmit={login} className={classes.card}>
          <h1>Login</h1>
          <input
            type="text"
            name="username"
            required
            placeholder="Enter Username"
            className={classes.username}
          />
          <input
            className={classes.password}
            type="password"
            name="password"
            required
            placeholder="Enter Password"
          />

          <p className={classes.error}> {error}</p>
          <input type="submit" className={classes.button} />
        </form>
      </modal>
    </>
  );
}

export default Login;
