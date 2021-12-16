//import { useState } from "react";
//import useApiData from "./hooks/useApiData";
import Home from "./pages/Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Contents from "./pages/Contents";
import { Route, Routes } from "react-router-dom";
import ContentDetail from "./pages/ContentDetail";
import About from "./pages/About";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound"

const App = () => {

  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
        <Route
          path="/contents"
          element={
            <Contents />
          }
        />
        <Route path="/contents/:contentId" element={<ContentDetail/>} />
        <Route path="/about-us" element={<About />} />
        <Route path="/support-us" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
