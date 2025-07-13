import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import Cart from "./pages/Cart";

import Recipes from "./pages/Recipes";
import Menu from "./pages/Menu";
import Deals from "./pages/Deal";
import Subscription from "./pages/Subscription";
import Checkout from "./pages/Checkout";
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
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart/>
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout/>
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/recipes" element={<Recipes/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/deals" element={<Deals/>}/>
        <Route path="/subscription" element={<Subscription/>}/>
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
