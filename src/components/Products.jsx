import React, { useState } from "react";
import ProductCard from "../layouts/ProductCard";
import products from "../data/productData";

const categories = [
  "FOOD & DRINKS",
  "FRESH FRUITS",
  "VEGETABLES",
  "DRIED FOODS & NUTS",
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("FOOD & DRINKS");

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <section className="bg-gray-50 pb-10 px-5 lg:px-14">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Products
      </h2>

      <div className="flex flex-wrap justify-center mb-6 space-x-4 text-sm font-medium text-green-600">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`pb-1 border-b-2 ${
              selectedCategory === cat
                ? "border-green-600"
                : "border-transparent"
            } hover:border-green-400 transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
