import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Detail from "./Detail";
// import { HashRouter, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Detail = React.lazy(() => import("./Detail"));

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>............</>}>
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="/Detail"
          element={
            <React.Suspense fallback={<>...</>}>
              {" "}
              <Detail />{" "}
            </React.Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
