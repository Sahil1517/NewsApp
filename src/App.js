import "./App.css";

import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
           <Route
            exact
            path="/home"
            element={<News key="general" country="in" category="general" />}
          /> 
           <Route
            exact
            path="/newsapp"
            element={<News key="general" country="in" category="general" />}
          />
           <Route 
            exact
            path="/sports"
            element={<News key="sports" country="in" category="sports" />}
          />
          <Route
            exact
            path="/science"
            element={<News key="science" country="in" category="science" />}
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News key="entertainment" country="in" category="entertainment" />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <News key="technology" country="in" category="technology" />
            }
          />
          <Route
            exact
            path="/health"
            element={<News key="health" country="in" category="health" />}
          />
        </Routes>
      </Router>
    </div>
  );
}
