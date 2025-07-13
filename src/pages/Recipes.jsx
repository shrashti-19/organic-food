import React from "react";
import recipes from "../data/recipesData";

const Recipes = () => {
  return (
    <section className="p-6 lg:px-20">
      <h2 className="text-4xl font-bold mb-8 text-center">Delicious Recipes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {recipes.map(({ id, title, image, description, ingredients, steps }) => (
          <article key={id} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">{description}</p>

            <h4 className="font-bold mb-1">Ingredients:</h4>
            <ul className="list-disc list-inside mb-4">
              {ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>

            <h4 className="font-bold mb-1">Preparation Steps:</h4>
            <ol className="list-decimal list-inside">
              {steps.map((step, idx) => (
                <li key={idx} className="mb-1">{step}</li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Recipes;
