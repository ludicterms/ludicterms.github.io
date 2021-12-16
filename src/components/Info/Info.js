import React from "react";
import styles from "./Info.module.css";
import Section from "../UI/Section/Section";
import euLogo from "../../assets/erc_eu_logo.jpg"

const Info = () => {
  return (
    <Section>
      <div className={styles.contentBox}>
        <p>Some description about the project</p>
        <p style={{ fontSize: "12px", fontStyle: "italic" }}>
          Principal Editors and responsibly people of the page: Mike
        </p>
      </div>
      <div className={styles.contentBox}>
        <p>
          This research has received funding from the European Research Council
          (ERC) under the European Union’s Horizon 2020 research and innovation
          programme (Grant Agreement No [695528] – MSG: Making Sense of Games).
        </p>
        <img src={euLogo} alt={"euLogo"}/>
      </div>
    </Section>
  );
};

export default Info;
