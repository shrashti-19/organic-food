import React from "react";
import { toast } from "react-toastify";

const ProductCard = ({ id, name, price, image, description }) => {
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Check if item is already in cart
    const alreadyInCart = existingCart.find((item) => item.id === id);

    if (alreadyInCart) {
      toast.info("Item is already in the cart!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    const updatedCart = [...existingCart, { id, name, price, image }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item added to cart!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
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
