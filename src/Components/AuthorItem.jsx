import React from "react";
import classes from "./AuthorItem.module.css";

export function AuthorItem(props) {
  return (
    <>
      <div className={classes.card}>
        <img className={classes.img} src={props.image} />
        <div className={classes.text}>{props.author}</div>
      </div>
    </>
  );
}
