// // src/components/ProductModal.jsx
// import React from "react";
// import { toast } from "react-toastify";

// const ProductModal = ({ product, onClose }) => {
//   if (!product) return null;

//   const { id, name, title, price, image, description } = product;
//   const displayName = name || title;

//   const handleAddToCart = () => {
//     const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
//     const alreadyInCart = existingCart.find((item) => item.id === id);

//     if (alreadyInCart) {
//       toast.info("Item is already in the cart!", { position: "top-right" });
//       return;
//     }

//     const updatedCart = [...existingCart, { id, name: displayName, price, image }];
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     window.dispatchEvent(new Event("cartUpdated"));

//     toast.success("Item added to cart!", { position: "top-right" });
//     onClose(); // Close modal after adding
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-md relative">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-500"
//         >
//           ×
//         </button>

//         <img src={image} alt={displayName} className="w-full h-52 object-cover rounded mb-4" />
//         <h2 className="text-xl font-bold mb-2">{displayName}</h2>
//         <p className="text-gray-600 mb-2">{description}</p>
//         <p className="text-green-600 font-semibold text-lg mb-4">${price}</p>

//         <button
//           onClick={handleAddToCart}
//           className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;
import React, { useState } from "react";
import { toast } from "react-toastify";

const ProductModal = ({ product, onClose }) => {
  const [adding, setAdding] = useState(false);

  if (!product) return null;

  const { id, name, price, image, description } = product;
  const displayName = name;

  const handleAddToCart = () => {
    if (adding) return; // prevent multiple clicks
    setAdding(true);

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyInCart = existingCart.find((item) => item.id === id);

    if (alreadyInCart) {
      toast.info("Item is already in the cart!", { position: "top-right" });
      setAdding(false);
      return;
    }

    const updatedCart = [...existingCart, { id, name: displayName, price, image }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));

    toast.success("Item added to cart!", { position: "top-right" });
    setAdding(false);
    onClose(); // Close modal after adding
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-md relative animate-scaleIn"
        onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-500 hover:text-red-500"
          aria-label="Close modal"
        >
          ×
        </button>

        <img
          src={image}
          alt={displayName}
          className="w-full h-52 object-cover rounded mb-4"
        />
        <h2 className="text-xl font-bold mb-2">{displayName}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-green-600 font-semibold text-lg mb-4">${price}</p>

        <button
          onClick={handleAddToCart}
          disabled={adding}
          className={`w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition-transform duration-300 ${
            adding ? "scale-110" : ""
          }`}
        >
          {adding ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
