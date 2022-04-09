//import { useState } from "react";
//import useApiData from "./hooks/useApiData";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Contents from "./pages/Contents";
import { Route, Routes } from "react-router-dom";
import ContentDetail from "./pages/ContentDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AuthorList from "./pages/AuthorList";
import EditorialInformation from "./pages/EditorialInformation";
import TableOfContents from "./pages/TableOfContents";
import HowToCite from "./pages/HowToCite";
import RecentArticles from "./pages/RecentArticles";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.layoutWrapper}>
      <NavBar />
      <div className={styles.layout}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contents" element={<Contents />} />
          <Route path="/contents/:contentId" element={<ContentDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/author-list" element={<AuthorList />} />
          <Route path="/editorial" element ={<EditorialInformation />} />
          <Route path="/toc" element ={<TableOfContents />} />
          <Route path="/how-to-cite" element ={<HowToCite />} />
          <Route path="/recent-articles" element ={<RecentArticles />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
