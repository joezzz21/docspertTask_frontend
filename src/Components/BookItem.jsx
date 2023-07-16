import React from "react";
import classes from "./BookItem.module.css";

export function BookItem(props) {
  function handler() {
    props.clickhandler(props.book.id);
  }

  function edithandler() {
    props.edithandler(props.book.id);
  }

  function deletehandler() {
    props.deletehandler(props.book.id);
  }

  return (
    <div className={classes.card}>
      <img className={classes.img} src={props.img} />
      <div className={classes.container}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.author}>By: {props.author}</p>
        <p className={classes.text}>
          {/* {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          odio in est dapibus laoreet. Vestibulum eget tempor turpis. Curabitur
          mauris nulla, fermentum eget vulputate consequat, iaculis eu nisl.
          Pellentesque non imperdiet leo. Nullam aliquet leo lorem, id bibendum
          est commodo quis. Praesent porta quam non nulla viverra ultrices.
          Pellentesque.{" "} */}
          {props.description}
        </p>
        <button className={classes.button} onClick={handler}>
          Read
        </button>
        {props.user == "Author" && (
          <button className={classes.button} onClick={edithandler}>
            Edit
          </button>
        )}
        {props.user == "Author" && (
          <button className={classes.button1} onClick={deletehandler}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
