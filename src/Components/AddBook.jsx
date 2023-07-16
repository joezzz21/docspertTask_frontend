import React, { useState, useEffect, useContext } from "react";
import classes from "./AddBook.module.css";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function AddBook(props) {
  const navigate = useNavigate();
  let { user } = useContext(AuthContext);

  async function addBook(e) {
    e.preventDefault();
    console.log(e);
    const DOMAIN = "http://localhost:8000";
    const response = await fetch(`${DOMAIN}/api/createbook/${user.user_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: e.target.title.value,
        description: e.target.description.value,
      }),
    });
    console.log(response);
    const data = await response.json();

    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || "Could not update Book.");
    } else {
      navigate("/");
    }
  }

  return (
    <>
      <modal className={classes.container}>
        <form onSubmit={addBook} className={classes.card} method="POST">
          <h1>Create Book</h1>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              required
              placeholder="Enter Title"
              className={classes.title}
            />
          </div>

          <div>
            <label>Description</label>
            <input
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

export default AddBook;
