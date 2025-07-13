import React from "react";
import subscriptionPlans from "../data/subscriptionData";

const Subscription = () => {
  return (
    <section className="py-12 px-6 lg:px-20 bg-green-50">
      <h2 className="text-4xl font-bold text-center text-green-900 mb-10">
        Choose Your Subscription Plan
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {subscriptionPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">
              ${plan.price} <span className="text-lg font-normal">/{plan.billingCycle}</span>
            </p>
            <ul className="mb-6 space-y-2 text-gray-700">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded transition"
              onClick={() => alert(`Subscribed to ${plan.title}`)}
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Subscription;
