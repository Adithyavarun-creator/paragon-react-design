import React from "react";
import classes from "./TitleBox.module.css";

const TitleBox = ({ heading, subheading }) => {
  return (
    <div className={classes.titleBox}>
      <div>
        <h1 className={classes.titleBoxheading}>{heading}</h1>
      </div>
      <div>
        <h2 className={classes.titleBoxSubheading}>{subheading}</h2>
      </div>
      <div className={classes.lineUnderline}></div>
    </div>
  );
};

export default TitleBox;
