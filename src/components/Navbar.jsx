import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
   const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = () => {
      setLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    checkLogin();

    // Optional: Listen for storage changes across tabs
    window.addEventListener("storage", checkLogin);
    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    setLoggedIn(false);
    navigate("/login");
  };
  return (
    <header className="flex flex-row justify-between items-center px-5 py-5 lg:px-14 md:px-10 bg-[#c4dbce]">
      {/* logo section  */}
      <div>
        <span className=" text-xl font-bold">FarmRoot</span>
      </div>

      {/* nav section  */}
      <nav className=" hidden md:flex flex-row gap-6">
        <a href="#home" className="navHover">
          Home
        </a>
        <a href="#menu" className="navHover">
          Menu
        </a>
        <a href="#about" className="navHover">
          About Us
        </a>
        <a href="#subscription" className="navHover">
          Subscription
        </a>
        <a href="#recipes" className="navHover">
          Recipes
        </a>
        <a href="#footer" className="navHover">
          Contact
        </a>

        {/* icons */}
        <div className=" hidden lg:flex gap-2 ml-8">
          <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
            <FiSearch />
          </span>
          <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
            <IoIosContact />
          </span>
          <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
            <FaShoppingCart />
          </span>
        </div>

      {/* Auth Buttons */}
        {loggedIn ? (
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="ml-4 bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="ml-2 bg-white border border-green-600 text-green-700 px-4 py-1 rounded hover:bg-green-100"
            >
              Signup
            </Link>
          </>
        )}
      </nav>


      {/* responsive */}

      <button className="md:hidden bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300">
        Shop Now
      </button>
    </header>
  );
};

export default Navbar;
