import React, { useContext } from "react";
import classes from "./AddPage.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function AddPage(props) {
  const navigate = useNavigate();
  const location = useLocation();

  let { user } = useContext(AuthContext);

  async function addPage(e) {
    e.preventDefault();
    console.log(e);
    const DOMAIN = "http://localhost:8000";
    const response = await fetch(
      `${DOMAIN}/api/createpage/${location.state.book}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: e.target.description.value,
        }),
      }
    );
    console.log(response);
    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || "Could not update Book.");
    } else {
      navigate(`/books/${user.user_id}`);
    }
  }

  return (
    <>
      <modal className={classes.container}>
        <form onSubmit={addPage} className={classes.card} method="POST">
          <h1>Create Page</h1>
          <div className={classes.div}>
            <label className={classes.label}>Page Text</label>
            <textarea
              className={classes.description}
              type="text"
              name="description"
              required
              placeholder="Enter Description"
            />
          </div>

          <input type="submit" className={classes.button} />
        </form>
      </modal>
    </>
  );
}

export default AddPage;
