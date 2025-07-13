import React from "react";
import { toast } from "react-toastify";
import dealsData from "../data/dealData";

const Deals = () => {
  const handleAddToCart = (deal) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    const alreadyInCart = existingCart.find((item) => item.id === deal.id);

    if (alreadyInCart) {
      toast.info("Item is already in the cart!", { position: "top-right", autoClose: 2000 });
      return;
    }

    const updatedCart = [...existingCart, deal];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    window.dispatchEvent(new Event("cartUpdated"));

    toast.success("Item added to cart!", { position: "top-right", autoClose: 2000 });
  };

  return (
    <section className="bg-gray-50 py-10 px-5 lg:px-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-green-800">Hot Deals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dealsData.map((deal) => (
          <div
            key={deal.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
          >
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{deal.title}</h3>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-green-700 font-bold text-xl">${deal.price}</span>
              {deal.oldPrice && (
                <span className="line-through text-gray-400">${deal.oldPrice}</span>
              )}
              {deal.discount && (
                <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded text-xs font-semibold">
                  {deal.discount}% OFF
                </span>
              )}
            </div>
            <button
              onClick={() => handleAddToCart(deal)}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Deals;
