import React, { useState, useEffect } from "react";
import classes from "./EditBook.module.css";
import { useParams, useNavigate } from "react-router-dom";

function EditBook(props) {
  const [book, setBook] = useState();
  const id = useParams();
  const navigate = useNavigate();

  async function updateBook(e) {
    e.preventDefault();
    console.log(e);
    const DOMAIN = "http://localhost:8000";
    const response = await fetch(`${DOMAIN}/api/editbook/${id.bookid}`, {
      method: "PUT",
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

  useEffect(() => {
    async function getBook() {
      const DOMAIN = "http://localhost:8000";
      const response = await fetch(`${DOMAIN}/api/book/${id.bookid}`);

      const data = await response.json();

      console.log(data.data);

      if (!response.ok) {
        throw new Error(data.message || "Could not fetch Pages.");
      }

      setBook(data);
    }
    getBook();
  }, []);

  return (
    <>
      {book != null && (
        <modal className={classes.container}>
          <form onSubmit={updateBook} className={classes.card} method="PUT">
            <h1>Edit Book</h1>
            <div>
              <label>Title</label>
              <input
                type="text"
                name="title"
                defaultValue={book.title}
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
                defaultValue={book.description}
                name="description"
                required
                placeholder="Enter Description"
              />
            </div>

            <input type="submit" className={classes.button} />
          </form>
        </modal>
      )}
    </>
  );
}

export default EditBook;