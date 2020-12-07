import React from "react";
import classes from "../Search/Search.module.css";

export default function search(props) {
  return (
    <div className={classes.search} align="center">
      <form>
        <input
          type="text"
          placeholder={props.placeholder}
          onChange={props.searchHandler}
          value={props.value}
        />
      </form>
    </div>
  );
}
