// import React from "react";
// import { toast } from "react-toastify";

// const ProductCard = ({ id, name, title, price, image, description }) => {
//   const displayName = name || title;

//   const handleAddToCart = () => {
//     const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
//     const alreadyInCart = existingCart.find((item) => item.id === id);

//     if (alreadyInCart) {
//       toast.info("Item is already in the cart!", {
//         position: "top-right",
//         autoClose: 2000,
//       });
//       return;
//     }

//     if (!id || !name || !price || !image) {
//     toast.error("Cannot add incomplete product to cart");
//     return;
//    }
//     const updatedCart = [...existingCart, { id, name: displayName, price, image }];
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     window.dispatchEvent(new Event("cartUpdated"));

//     toast.success("Item added to cart!", {
//       position: "top-right",
//       autoClose: 2000,
//     });
//   };

//   return (
//     <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
//       <img
//         src={image}
//         alt={displayName}
//         className="w-full h-40 object-cover rounded-md mb-4"
//       />
//       <h3 className="text-lg font-semibold">{displayName}</h3>
//       <p className="text-sm text-gray-600 mb-2">{description}</p>
//       <div className="flex justify-between items-center mt-2">
//         <span className="text-green-600 font-bold">${price}</span>
//         <button
//           onClick={handleAddToCart}
//           className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
import React from "react";
import { toast } from "react-toastify";

const ProductCard = ({ id, name, title, price, image, description }) => {
  const displayName = name || title;

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyInCart = existingCart.find((item) => item.id === id);

    if (alreadyInCart) {
      toast.info("Item is already in the cart!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    // ✅ Use displayName instead of name in validation
    if (!id || !displayName || !price || !image) {
      toast.error("Cannot add incomplete product to cart");
      return;
    }

    const updatedCart = [...existingCart, { id, name: displayName, price, image }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));

    toast.success("Item added to cart!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
      <img
        src={image}
        alt={displayName}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{displayName}</h3>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-green-600 font-bold">${price}</span>
        <button
          onClick={handleAddToCart}
          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
