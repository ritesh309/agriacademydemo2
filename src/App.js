import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import Service from "./Service"
// const Home = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome ! </p>
//         <h1>Hapy Learning HomePage</h1>
//       </section>
//     </>
//   );
// };

// const About = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome ! </p>
//         <h1>Hapy Learning AboutPage</h1>
//       </section>
//     </>
//   );
// };

// const Service = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome ! </p>
//         <h1>Hapy Learning Service Page</h1>
//       </section>
//     </>
//   );
// };

// const Contact = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="hero-section">
//         <p>Welcome ! </p>
//         <h1>Hapy Learning Contact Page</h1>
//       </section>
//     </>
//   );
// };

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;