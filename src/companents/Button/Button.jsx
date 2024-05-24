import React from "react";
import styles from "./style.module.css";

function Button({ text, changeImageHandler, styleProps }) {
  return (
    <button
      className={styleProps ? styles.changeButton : ""}
      onClick={changeImageHandler}
    >
      {text}
    </button>
  );
}

export default Button;