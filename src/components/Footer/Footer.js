import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import euLogo from "../../assets/erc_eu_logo.jpg";

const Footer = () => {
  return (
    <footer>
      {/* <!-- Footer main --> */}
      <section className={styles.ftMain}>
        <div className={styles.ftMainItem}>
          <p className={styles.ftTitle}>About</p>
          <ul>
            <li>
              <Link to="editorial-information">Editorial Information</Link>
            </li>
            <li>
              <Link to="about">About the EoLT</Link>
            </li>
            <li>
              <Link to="how-to-cite">How to Cite the EoLT</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.ftMainItem}>
          <p className={styles.ftTitle}>Browse</p>
          <ul>
            <li>
              <Link to="toc">Table of Contents</Link>
            </li>
            <li>
              <Link to="author-list">List of Authors</Link>
            </li>
            <li>
              <Link to="recent-articles">Recent Articles</Link>
            </li>
          </ul>
        </div>
        <div className={styles.ftMainItem}>
          <p className={styles.ftTitle}>Funded by</p>
          <ul className={styles.eu}>
            <li>
              <p>
                This research has received funding from the European Research
                Council (ERC) under the European Union’s Horizon 2020 research
                and innovation programme (Grant Agreement No [695528] – MSG:
                Making Sense of Games).
              </p>
            </li>
            <li>
              <img src={euLogo} alt={"euLogo"} />
            </li>
          </ul>
        </div>
      </section>
      {/* <!-- Footer legal --> */}
      <section className={styles.ftLegal}>
        <ul className={styles.ftLegalList}>
          <li>
            &copy; 2022 Encyclopedia of Ludic Terms. All Rights Reserved.
            Developed by{" "}
            <a href="https://sophiaauer.me/" rel="noreferrer" target="_blank" style={{textDecoration: "none", color: "#bbb"}}>
              Sophia Auer
            </a>
            .
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
