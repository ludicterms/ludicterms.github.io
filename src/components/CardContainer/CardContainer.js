import React from "react";
import Card from "../Card/Card";
import styles from "./CardContainer.module.css";

const CardContainer = (props) => {
  return (
    <div className={styles.cardContainer}>
      {/*map data to each card*/}
      {!props.isLoading &&
        props.data.length > 0 &&
        props.data.map((item) => (
          <Card key={item.fields.slug} data={item}></Card>
        ))}
      {/* {props.isLoading && props.httpError && <p>{props.httpError}</p>} */}
      {props.isLoading && <p>Loading...</p>}
    </div>
  );
};

export default CardContainer;
