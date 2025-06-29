import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
const Home = () => (
  <>
    <Hero />
    <Features />
    <Products />
    <About />
    <HowItWorks />
    <Testimonial />
  </>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/signup" element={<Signup />} />
        {/* Login route will come next */}
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;