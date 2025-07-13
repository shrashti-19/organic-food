
// import React, { useEffect, useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { IoIosContact } from "react-icons/io";
// import { FaShoppingCart } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [cartCount, setCartCount] = useState(0);
//   const navigate = useNavigate();

//   // Function to update login and cart count status
//   const updateStatus = () => {
//     setLoggedIn(localStorage.getItem("isLoggedIn") === "true");
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartCount(cartItems.length);
//   };

//   useEffect(() => {
//     // Initial status update
//     updateStatus();

//     // Listen to storage events (e.g., when cart is updated in a different tab)
//     const handleStorageChange = () => {
//       updateStatus();
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
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
//       {/* Logo Section */}
//       <div>
//         <span className="text-xl font-bold">FarmRoot</span>
//       </div>

//       {/* Navigation Section */}
//       <nav className="hidden md:flex flex-row gap-6 items-center">
//         <a href="#home" className="navHover">
//           Home
//         </a>
//         <a href="#menu" className="navHover">
//           Menu
//         </a>
//         <a href="#about" className="navHover">
//           About Us
//         </a>
//         <a href="#subscription" className="navHover">
//           Subscription
//         </a>
//         <a href="#recipes" className="navHover">
//           Recipes
//         </a>
//         <a href="#footer" className="navHover">
//           Contact
//         </a>

//         {/* Icons with Cart Badge */}
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

//         {/* Authentication Buttons */}
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

//       {/* Responsive Mobile Button */}
//       <button className="md:hidden bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300">
//         Shop Now
//       </button>
//     </header>
//   );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
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

    // Optional: listen to custom event from cart updates
    window.addEventListener("cartUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartUpdated", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    setLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="flex flex-row justify-between items-center px-5 py-5 lg:px-14 md:px-10 bg-[#c4dbce]">
      {/* Logo */}
      <div>
        <Link to="/" className="text-xl font-bold">FarmRoot</Link>
      </div>

      {/* Navigation links */}
      <nav className="hidden md:flex flex-row gap-6 items-center">
        <Link to="/" className="navHover">Home</Link>
        <Link to="/menu" className="navHover">Menu</Link>
        <Link to="/about" className="navHover">About Us</Link>
        <Link to="/subscription" className="navHover">Subscription</Link>
        <Link to="/recipes" className="navHover">Recipes</Link>
        <Link to="/contact" className="navHover">Contact</Link>

        {/* Icons */}
        <div className="relative hidden lg:flex gap-2 ml-8">
          <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
            <FiSearch />
          </span>
          <span className="icons hover:bg-green-500 hover:text-white cursor-pointer">
            <IoIosContact />
          </span>
          <Link
            to="/cart"
            className="relative icons hover:bg-green-500 hover:text-white cursor-pointer"
          >
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
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

      {/* Mobile Shop Now Button */}
      <button
        onClick={() => navigate("/menu")}
        className="md:hidden bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full shadow-lg transition duration-300"
      >
        Shop Now
      </button>
    </header>
  );
};

export default Navbar;
