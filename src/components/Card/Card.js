import React from "react";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";
import styles from "./Card.module.css";

const Card = (props) => {
  const key = props.data.fields.slug;
  return (
    <Link
      className={styles.cardsWrapper}
      style={{ textDecoration: "none" }}
      key={key}
      to={`/articles/${key}/`}
    >
      <div className={styles.card}>
        <h1>{props.data.fields.mainTitle}</h1>
        <div className={styles.preview}><Markdown children={props.data.fields.abstract} /></div>
        <p>Author: {props.data.fields.author}</p>
      </div>
    </Link>
  );
};

export default Card;
