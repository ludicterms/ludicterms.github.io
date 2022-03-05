import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import euLogo from "../../assets/erc_eu_logo.jpg";

const Footer = () => {
  return (
    <footer>
      {/* <!-- Footer main --> */}
      <section className={styles.ftMain}>
        <div className={styles.ftMainItem}>
          <h2 className={styles.ftTitle}>About</h2>
          <ul>
            <li>
              <Link to="editorial">Editorial Information</Link>
            </li>
            <li>
              <Link to="about">About EoLT</Link>
            </li>
            <li>
              <Link to="/">How to Cite the EoLT</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.ftMainItem}>
          <h2 className={styles.ftTitle}>Browse</h2>
          <ul>
            <li>
              <Link to="toc">Table of Contents</Link>
            </li>
            <li>
              <Link to="author-list">List of Authors</Link>
            </li>
            <li>
              <Link to="/">Log of Changes</Link>
            </li>
          </ul>
        </div>
        <div className={styles.ftMainItem}>
          <h2 className={styles.ftTitle}>Funded by</h2>
          <ul className={styles.eu}>
            <li>
            <p>This research has received funding from the European Research Council
          (ERC) under the European Union’s Horizon 2020 research and innovation
          programme (Grant Agreement No [695528] – MSG: Making Sense of Games).</p>
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
          <li>The Encyclopedia of Ludic Terms is Copyright &copy; 2021 by XXX</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
