import React from "react";
import {
  FaLeaf,
  FaShippingFast,
  FaHandsHelping,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf className="text-green-600 text-4xl mb-3" size={45} />,
    title: "100% Organic",
    desc: "All our produce is grown without harmful chemicals or pesticides.",
  },
  {
    icon: <FaShippingFast className="text-green-600 text-4xl mb-3" size={45} />,
    title: "Fast Delivery",
    desc: "We deliver fresh produce at your doorstep within hours of harvesting.",
  },
  {
    icon: <FaHandsHelping className="text-green-600 text-4xl mb-3" size={45} />,
    title: "Farmer Support",
    desc: "Empowering local farmers with fair trade and sustainable practices.",
  },
  {
    icon: <FaCheckCircle className="text-green-600 text-4xl mb-3" size={45} />,
    title: "Quality Assured",
    desc: "Every item is checked for freshness and quality before delivery.",
  },
];

const Features = () => {
  return (
    <section className="bg-white py-14 px-5 lg:px-14 text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex justify-center text-4xl text-green-600 mb-3">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
