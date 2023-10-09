import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
// import App from "./App";
import BelowNavbar from "./components/BelowNavbar";
import SecondHero from "./components/SecondHero";
import ThirdHero from "./components/ThirdHero";
import JavaScriptHero from "./components/JavaScriptHero";
import PythonHero from "./components/PythonHero";
import SqlHero from "./components/SqlHero";
import LanguageGrid from "./components/LanguageGrid";
import LearningHero from "./components/LearningHero";
import ProHero from "./components/ProHero";
import ColorHero from "./components/ColorHero";
import CodeGame from "./components/CodeGame";
import Web from "./components/Web";
import Kickstart from "./components/Kickstart";
import Howto from "./components/Howto";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HtmlPage from "./components/pages/HtmlPage.jsx";
import LogIn from "./components/Login.jsx";
import CssPage from "./components/pages/CssPage.jsx";
import JsPage from "./components/pages/JsPage.jsx";
import { useState } from "react";
import SqlPage from "./components/pages/SqlPage.jsx";
import Spaces from "./components/pages/Spaces.jsx";
import Button from "./codeeditor/Button.jsx";
import { MainPage } from "./codeeditor/MainPage.jsx";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LogIn setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/html"
          element={
            <>
              <Navbar />
              <BelowNavbar />
              <HtmlPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/css"
          element={
            <>
              <Navbar />
              <BelowNavbar />
              <CssPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/js"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <JsPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/sql"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <SqlPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/spaces"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} />
              <BelowNavbar />
              <Spaces />
              <Footer />
            </>
          }
        />
        <Route
          path="/codeeditor"
          element={
            <>
              <Button />
              <MainPage />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              <BelowNavbar />
              <Hero />
              <SecondHero />
              <ThirdHero />
              <JavaScriptHero />
              <PythonHero />
              <SqlHero />
              <LanguageGrid />
              <LearningHero />
              <ProHero />
              <ColorHero />
              <CodeGame />
              <Web />
              <Kickstart />
              <Howto />
              <Footer />
            </>
          }
        />
      </Routes>
      <></>
    </Router>
  );
}
