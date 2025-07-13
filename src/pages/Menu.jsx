import React, { useState } from "react";
import menuData from "../data/menuData";

const categories = [
  "FOOD & DRINKS",
  "FRESH FRUITS",
  "VEGETABLES",
  "DRIED FOODS & NUTS",
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("FOOD & DRINKS");

  const filteredMenu = menuData.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <section className="bg-gray-50 pb-10 px-5 lg:px-14">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Menu
      </h2>

      <div className="flex flex-wrap justify-center mb-6 space-x-4 text-sm font-medium text-green-600">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`pb-1 border-b-2 ${
              selectedCategory === cat ? "border-green-600" : "border-transparent"
            } hover:border-green-400 transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMenu.map(({ id, image, title, price, oldPrice, discount, description, status }) => (
          <div key={id} className={`bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition ${status === "soldout" ? "opacity-50 pointer-events-none" : ""}`}>
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 mb-2">{description}</p>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-green-600 font-bold">${price}</span>
                {oldPrice && (
                  <span className="line-through text-gray-400 ml-2">${oldPrice}</span>
                )}
                {discount && (
                  <span className="text-red-500 ml-2">({discount}% OFF)</span>
                )}
              </div>
              {status === "soldout" && (
                <span className="text-red-600 font-semibold">Sold Out</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
