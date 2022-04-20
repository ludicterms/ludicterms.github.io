import React, { lazy, Suspense } from "react";
/* import Home from "./pages/Home"; */
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
/* import Contents from "./pages/Contents"; */
import { Route, Routes } from "react-router-dom";
/* import ContentDetail from "./pages/ContentDetail"; */
/* import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AuthorList from "./pages/AuthorList";
import EditorialInformation from "./pages/EditorialInformation";
import TableOfContents from "./pages/TableOfContents";
import HowToCite from "./pages/HowToCite";
import RecentArticles from "./pages/RecentArticles"; */
import styles from "./App.module.css";

const ContentDetail = lazy(() => import("./pages/ContentDetail"));
const Contents = lazy(() => import("./pages/Contents"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AuthorList = lazy(() => import("./pages/AuthorList"));
const EditorialInformation = lazy(() => import("./pages/EditorialInformation"));
const TableOfContents = lazy(() => import("./pages/TableOfContents"));
const HowToCite = lazy(() => import("./pages/HowToCite"));
const RecentArticles = lazy(() => import("./pages/RecentArticles"));
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <div className={styles.layoutWrapper}>
      <NavBar />
      <div className={styles.layout}>
        <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Contents />} />

            <Route path="/articles/:contentId" element={<ContentDetail />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/author-list" element={<AuthorList />} />
            <Route
              path="/editorial-information"
              element={<EditorialInformation />}
            />
            <Route path="/toc" element={<TableOfContents />} />
            <Route path="/how-to-cite" element={<HowToCite />} />
            <Route path="/recent-articles" element={<RecentArticles />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default App;
