import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Route, Routes, useLocation } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes
          location={location}
          key={location.pathname}>
          <Route
            path="/"
            exact
            element={<AboutUs />}
          />
          <Route
            path="/work"
            exact
            element={<OurWork />}
          />
          <Route
            path="/work/:id"
            element={<MovieDetail />}
          />
          <Route
            path="/contact"
            exact
            element={<ContactUs />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
