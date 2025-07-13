

// import React, { useEffect, useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { IoIosContact } from "react-icons/io";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [cartCount, setCartCount] = useState(0);
//   const navigate = useNavigate();

//   const updateStatus = () => {
//     setLoggedIn(localStorage.getItem("isLoggedIn") === "true");
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartCount(cartItems.length);
//   };

//   useEffect(() => {
//     updateStatus();

//     const handleStorageChange = () => {
//       updateStatus();
//     };

//     window.addEventListener("storage", handleStorageChange);

//     // Optional: listen to custom event from cart updates
//     window.addEventListener("cartUpdated", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//       window.removeEventListener("cartUpdated", handleStorageChange);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("loggedInUser");
//     setLoggedIn(false);
//     navigate("/login");
//   };

//   return (
//     <header className="flex flex-row justify-between items-center px-5 py-5 lg:px-14 md:px-10 bg-[#c4dbce]">
//       {/* Logo */}
//       <div>
//         <Link to="/" className="text-xl font-bold">FarmRoot</Link>
//       </div>

//       {/* Navigation links */}
//       <nav className="hidden md:flex flex-row gap-6 items-center">
//         <Link to="/" className="navHover">Home</Link>
//         <Link to="/menu" className="navHover">Menu</Link>
//         <Link to="/about" className="navHover">About Us</Link>
//         <Link to="/subscription" className="navHover">Subscription</Link>
//         <Link to="/recipes" className="navHover">Recipes</Link>
//         <Link to="/deals" className="navHover">Deals</Link>
//         <Link to="/contact" className="navHover">Contact</Link>

//         {/* Icons */}
//         <div className="relative hidden lg:flex gap-2 ml-8">
//           <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
//             <FiSearch />
//           </span>
//           <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
//             <IoIosContact />
//           </span>
//           <Link
//             to="/cart"
//             className="relative icons hover:bg-green-500 hover:text-white cursor-pointer"
//           >
//             <FaShoppingCart />
//             {cartCount > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                 {cartCount}
//               </span>
//             )}
//           </Link>
//         </div>

//         {/* Auth Buttons */}
//         {loggedIn ? (
//           <button
//             onClick={handleLogout}
//             className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
//           >
//             Logout
//           </button>
//         ) : (
//           <>
//             <Link
//               to="/login"
//               className="ml-4 bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
//             >
//               Login
//             </Link>
//             <Link
//               to="/signup"
//               className="ml-2 bg-white border border-green-600 text-green-700 px-4 py-1 rounded hover:bg-green-100"
//             >
//               Signup
//             </Link>
//           </>
//         )}
//       </nav>

//       {/* Mobile Shop Now Button */}
//       <button
//         onClick={() => navigate("/menu")}
//         className="md:hidden bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300"
//       >
//         Shop Now
//       </button>
//     </header>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { FiSearch, FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || false
  );
  const navigate = useNavigate();

  const updateStatus = () => {
    setLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cartItems.length);
  };

  useEffect(() => {
    updateStatus();

    const handleStorageChange = () => {
      updateStatus();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("cartUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartUpdated", handleStorageChange);
    };
  }, []);

  // Dark mode toggle effect
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    setLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="flex flex-row justify-between items-center px-5 py-5 lg:px-14 md:px-10 bg-[#c4dbce] dark:bg-gray-900 transition-colors duration-300">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <Link to="/" className="text-xl font-bold dark:text-white">
          FarmRoot
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-2xl dark:text-white"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation links */}
      <nav
        className={`${
          mobileMenuOpen ? "flex flex-col" : "hidden"
        } md:flex md:flex-row md:gap-6 md:items-center md:flex-nowrap absolute md:static top-full left-0 right-0 bg-[#c4dbce] md:bg-transparent dark:bg-gray-900 md:dark:bg-transparent z-20 md:z-auto px-5 md:px-0 py-4 md:py-0`}
      >
        <Link to="/" className="navHover dark:text-white" onClick={() => setMobileMenuOpen(false)}>
          Home
        </Link>
        <Link to="/menu" className="navHover dark:text-white" onClick={() => setMobileMenuOpen(false)}>
          Menu
        </Link>
        <Link to="/about" className="navHover dark:text-white" onClick={() => setMobileMenuOpen(false)}>
          About Us
        </Link>
        <Link to="/subscription" className="navHover dark:text-white" onClick={() => setMobileMenuOpen(false)}>
          Subscription
        </Link>
        <Link to="/recipes" className="navHover dark:text-white" onClick={() => setMobileMenuOpen(false)}>
          Recipes
        </Link>
        <Link to="/deals" className="navHover dark:text-white" onClick={() => setMobileMenuOpen(false)}>
          Deals
        </Link>
        <Link to="/contact" className="navHover dark:text-white" onClick={() => setMobileMenuOpen(false)}>
          Contact
        </Link>

        {/* Icons */}
        <div className="relative hidden lg:flex gap-2 ml-8 items-center">
          {/* Search icon and input */}
          <div className="relative">
            <button
              aria-label="Toggle search"
              onClick={() => setSearchOpen(!searchOpen)}
              className="icons hover:bg-green-500 hover:text-white cursor-pointer p-2 rounded"
            >
              <FiSearch />
            </button>
            {searchOpen && (
              <input
                type="text"
                placeholder="Search products..."
                className="absolute top-full mt-1 left-0 w-48 p-2 rounded border dark:bg-gray-800 dark:text-white"
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
            )}
          </div>

          <span className="icons hover:bg-green-500 hover:text-white cursor-pointer p-2 rounded">
            <IoIosContact />
          </span>

          <Link
            to="/cart"
            className="relative icons hover:bg-green-500 hover:text-white cursor-pointer p-2 rounded"
            aria-label="Shopping cart"
          >
            <FaShoppingCart />
            {cartCount > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce"
                aria-live="polite"
              >
                {cartCount}
              </span>
            )}
          </Link>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="icons hover:bg-green-500 hover:text-white cursor-pointer p-2 rounded ml-2"
          >
            {darkMode ? (
              <FiSun className="text-yellow-400" />
            ) : (
              <FiMoon />
            )}
          </button>
        </div>

        {/* Auth Buttons */}
        {loggedIn ? (
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded mt-4 md:mt-0"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="ml-4 bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded mt-4 md:mt-0"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="ml-2 bg-white border border-green-600 text-green-700 px-4 py-1 rounded hover:bg-green-100 mt-4 md:mt-0"
            >
              Signup
            </Link>
          </>
        )}
      </nav>

      {/* Mobile Shop Now Button */}
      {!mobileMenuOpen && (
        <button
          onClick={() => navigate("/menu")}
          className="md:hidden bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300"
        >
          Shop Now
        </button>
      )}
    </header>
  );
};

export default Navbar;
