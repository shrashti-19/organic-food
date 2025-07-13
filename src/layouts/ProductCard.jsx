

// export default ProductCard;
import React, { useState } from "react";
import { toast } from "react-toastify";
import ProductModal from "../components/ProductModal";

const ProductCard = ({ id, name, title, price, image, description }) => {
  const displayName = name || title;
  const [modalOpen, setModalOpen] = useState(false);
  const [adding, setAdding] = useState(false);

  const handleAddToCart = () => {
    if (adding) return; // prevent multiple clicks
    setAdding(true);

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyInCart = existingCart.find((item) => item.id === id);

    if (alreadyInCart) {
      toast.info("Item is already in the cart!", {
        position: "top-right",
        autoClose: 2000,
      });
      setAdding(false);
      return;
    }

    if (!id || !displayName || !price || !image) {
      toast.error("Cannot add incomplete product to cart");
      setAdding(false);
      return;
    }

    const updatedCart = [...existingCart, { id, name: displayName, price, image }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));

    toast.success("Item added to cart!", {
      position: "top-right",
      autoClose: 2000,
    });

    setTimeout(() => setAdding(false), 300); // reset animation
  };

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition cursor-pointer"
      >
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
            onClick={(e) => {
              e.stopPropagation(); // prevent modal open on button click
              handleAddToCart();
            }}
            className={`bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-transform duration-300 ${
              adding ? "scale-110" : ""
            }`}
            disabled={adding}
          >
            {adding ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>

      {modalOpen && (
        <ProductModal
          product={{ id, name: displayName, price, image, description }}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
