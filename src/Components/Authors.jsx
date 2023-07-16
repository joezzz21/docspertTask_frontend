import React from "react";
import { AuthorItem } from "./AuthorItem";
import classes from "./Authors.module.css";
import image1 from "../static/image_1.jpg";
import image2 from "../static/image_2.jpg";
import image3 from "../static/image_3.jpg";
import image4 from "../static/image_4.jpeg";
import image5 from "../static/image_5.jpeg";
import image6 from "../static/image_6.jpeg";

function Authors() {
  return (
    <div className={classes.container1}>
      <div className={classes.text}> Popular Authors </div>
      <div className={classes.container2}>
        <AuthorItem
          author="Nadia Ahmed"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={image1}
        />

        <AuthorItem
          author="Ahmed Morad"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={image2}
        />
        <AuthorItem
          author="Mohamed Rostom"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={image3}
        />
        <AuthorItem
          author="Mohamed Sherif"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={image4}
        />
        <AuthorItem
          author="Youssef Yasser"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={image5}
        />
        <AuthorItem
          author="Omar khairat"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          image={image6}
        />
      </div>
    </div>
  );
}

export default Authors;
