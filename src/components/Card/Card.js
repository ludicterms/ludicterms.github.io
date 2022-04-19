import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = (props) => {
  const key = props.data.fields.slug;
  return (
    <Link
      className={styles.cardsWrapper}
      style={{ textDecoration: "none" }}
      key={key}
      to={`${props.isHome ? `articles/` : ''}${key}`}
    >
      <div className={styles.card}>
        <h1>{props.data.fields.mainTitle}</h1>
        <p className={styles.preview}> {props.data.fields.abstract}</p>
        <p>Author: {props.data.fields.author}</p>
      </div>
    </Link>
  );
};

export default Card;
