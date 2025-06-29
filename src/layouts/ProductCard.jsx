import React from "react";

const ProductCard = ({ image, title, price, oldPrice, discount, status }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition relative overflow-hidden">
      {/* Discount badge */}
      {discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
          -{discount}%
        </div>
      )}

      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="text-lg font-semibold mt-4 text-center">{title}</h3>

      <div className="mt-2 text-center">
        <span className="text-green-600 font-bold">${price}</span>
        {oldPrice && (
          <span className="text-gray-500 line-through ml-2">${oldPrice}</span>
        )}
      </div>

      {status === "soldout" ? (
        <p className="text-red-600 font-semibold mt-5 text-center">Sold Out</p>
      ) : (
        <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm font-medium transition">
          Shop Now
        </button>
      )}
    </div>
  );
};

export default ProductCard;
