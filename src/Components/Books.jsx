import React, { useState } from "react";
import classes from "./Books.module.css";
import { BookItem } from "./BookItem";
import { useNavigate } from "react-router-dom";
import book1 from "../static/book_1.jpg";
import book2 from "../static/book_2.jpg";
import book3 from "../static/book_3.jpg";
import book4 from "../static/book_4.jpg";
import book5 from "../static/book_5.jpg";

export default function Books(props) {
  const navigate = useNavigate();

  function handleClick(key) {
    navigate(`/book/${key}`);
  }

  //   console.log(props.data[0]);
  return (
    <div className={classes.container}>
      <div className={classes.text}> Browse Books </div>
      {props.data.map((book) => {
        return (
          <BookItem
            key={book.id}
            book={book}
            clickhandler={handleClick}
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
