import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import "../css/App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Hosting from "./Hosting";
import WebDevelopment from "./WebDevelopment";
import "bootstrap/dist/css/bootstrap.css";
import ReactGA from "react-ga";
const TRACKING_ID = "G-TCX2K37CPJ"; // YOUR_OWN_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-hosting" element={<Hosting />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="web-development" element={<WebDevelopment />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
