import React, { useContext } from "react";
import classes from "./MyBook.module.css";
import { BookItem } from "./BookItem";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import book1 from "../static/book_1.jpg";
import book2 from "../static/book_2.jpg";
import book3 from "../static/book_3.jpg";
import book4 from "../static/book_4.jpg";
import book5 from "../static/book_5.jpg";

export default function Mybook(props) {
  const navigate = useNavigate();
  let { authTokens } = useContext(AuthContext);

  function handleClick(key) {
    navigate(`/book/${key}`, { state: { user: "Author" } });
  }

  function handleEditClick(key) {
    navigate(`/editbook/${key}`);
  }

  function handleAddClick() {
    navigate(`/createbook`);
  }
  async function handleDeleteClick(key) {
    const DOMAIN = "http://localhost:8000";
    const response = await fetch(`${DOMAIN}/api/deletebook/${key}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authTokens.access,
      },
    });

    const data = await response.json();

    console.log(data.data);

    if (!response.ok) {
      throw new Error(data.message || "Could not delete Book.");
    } else {
      navigate("/");
    }
  }
  //   console.log(props.data[0]);
  return (
    <div className={classes.container}>
      <div className={classes.text}>
        {" "}
        Browse Books{" "}
        <button className={classes.button} onClick={handleAddClick}>
          {" "}
          Add Book
        </button>
      </div>
      {props.data.map((book) => {
        return (
          <BookItem
            key={book.id}
            user={"Author"}
            book={book}
            clickhandler={handleClick}
            edithandler={handleEditClick}
            deletehandler={handleDeleteClick}
            img={book1}
            author={book.authorName}
            title={book.title}
            description={book.description}
          />
        );
      })}
      {/* <BookItem img={book1} />
      <BookItem img={book2} />
      <BookItem img={book3} />
      <BookItem img={book4} />
      <BookItem img={book5} /> */}
    </div>
  );
}
