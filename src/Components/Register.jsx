import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Register.module.css";

function Register(props) {
  const navigate = useNavigate();
  const [error, setError] = useState();

  async function register(e) {
    e.preventDefault();
    console.log(e);
    const DOMAIN = "http://localhost:8000";
    const response = await fetch(`${DOMAIN}/api/createuser/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
        name: e.target.name.value,
        role: e.target.role.value,
      }),
    });

    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      setError(data);
    } else {
      alert("Successfully registered, Please Login");
      navigate("/login");
    }
  }
  return (
    <>
      <modal className={classes.container}>
        <form onSubmit={register} className={classes.card} method="PUT">
          <h1>Register</h1>
          <div className={classes.div}>
            <label className={classes.label}>Username</label>
            <input
              type="text"
              name="username"
              required
              placeholder="Enter username"
              className={classes.title}
            />
          </div>

          <div className={classes.div}>
            <label className={classes.label}>Password</label>
            <input
              className={classes.title}
              type="password"
              name="password"
              required
              placeholder="Enter Password"
            />
          </div>

          <div className={classes.div}>
            <label className={classes.label}>Full name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter full name"
              className={classes.title}
            />
          </div>

          <div className={classes.div}>
            <label className={classes.label}>Role</label>
            <select id="role" name="role" className={classes.title}>
              <option value="Author">Author</option>
              <option value="Reader">Reader</option>
            </select>
          </div>

          <p className={classes.error}> {error} </p>

          <input type="submit" className={classes.button} />
        </form>
      </modal>
    </>
  );
}

export default Register;
