import { Link } from "react-router-dom";
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer>
      {/* <!-- Footer main --> */}
      <section className={styles.ftMain}>
        <div className={styles.ftMainItem}>
          <h2 className={styles.ftTitle}>About</h2>
          <ul>
            <li>
              <Link to="/">Editorial Information</Link>
            </li>
            <li>
              <Link to="/">About EoLT</Link>
            </li>
            <li>
              <Link to="/">How to Cite the EoLT</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.ftMainItem}>
          <h2 className={styles.ftTitle}>Browse</h2>
          <ul>
            <li>
              <Link to="/">Table of Contents</Link>
            </li>
            <li>
              <Link to="/">Archive</Link>
            </li>
            <li>
              <Link to="/">List of Authors</Link>
            </li>
            <li>
              <Link to="/">Log of Changes</Link>
            </li>
          </ul>
        </div>
        <div className={styles.ftMainItem}>
          <h2 className={styles.ftTitle}>Support EoLT</h2>
          <ul>
            <li>
              <Link to="/support-us">How to support EoLT</Link>
            </li>
          </ul>
        </div>
       {/*  <div className={styles.ftMainItem}>
          <h2 className={styles.ftTitle}>Stay Updated</h2>
          <p>Subscribe to our newsletter to get our latest news.</p>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
            />
            <input type="submit" value="Subscribe" />
          </form>
        </div> */}
      </section>

      {/* <!-- Footer social --> */}
      {/* <section className={styles.ftSocial}>
        <ul className={styles.ftSocialList}>
          <li>
            <a href="/">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </section> */}

      {/* <!-- Footer legal --> */}
      <section className={styles.ftLegal}>
        <ul className={styles.ftLegalList}>
         {/*  <li>
            <a href="/">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li> */}
          <li>The Encyclopedia of Ludic Terms is Copyright &copy; 2021 by XXX</li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
