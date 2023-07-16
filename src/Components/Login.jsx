import React, { useContext } from "react";
import classes from "./Login.module.css";
import AuthContext from "../context/AuthContext";

function Login(props) {
  let { loginUser } = useContext(AuthContext);
  return (
    <>
      <modal className={classes.container}>
        <form onSubmit={loginUser} className={classes.card}>
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
          <input type="submit" className={classes.button} />
        </form>
      </modal>
    </>
  );
}

export default Login;
