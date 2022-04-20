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
        <Routes>
          <Route
            path="/"
            element={
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/articles"
            element={
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <Contents />
              </Suspense>
            }
          />

          <Route
            path="/articles/:contentId"
            element={
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <ContentDetail />{" "}
              </Suspense>
            }
          />

          <Route
            path="/about"
            element={
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <About />{" "}
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/author-list"
            element={
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <AuthorList />{" "}
              </Suspense>
            }
          />
          <Route
            path="/editorial-information"
            element={
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <EditorialInformation />
              </Suspense>
            }
          />
          <Route
            path="/toc"
            element={
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <TableOfContents />
              </Suspense>
            }
          />
          <Route
            path="/how-to-cite"
            element={
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <HowToCite />
              </Suspense>
            }
          />
          <Route
            path="/recent-articles"
            element={
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <RecentArticles />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense
                fallback={<p style={{ textAlign: "center" }}>Loading...</p>}
              >
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
