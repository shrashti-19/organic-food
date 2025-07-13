import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  // const handlePlaceOrder = (e) => {
  //   e.preventDefault();

  //   if (!name || !address || !email) {
  //     toast.error("Please fill in all fields");
  //     return;
  //   }

  //   // For demonstration, clear cart and show success message
  //   localStorage.removeItem("cart");
  //   setCartItems([]);
  //   toast.success("Order placed successfully!");

  //   // Optionally, reset form fields
  //   setName("");
  //   setAddress("");
  //   setEmail("");
  // };

  // if (cartItems.length === 0) {
  //   return <p className="text-center mt-20 text-lg">Your cart is empty.</p>;
  // }
  const handlePlaceOrder = (e) => {
  e.preventDefault();

  if (!name || !address || !email) {
    toast.error("Please fill in all fields");
    return;
  }

  // Clear cart from localStorage and update state
  localStorage.removeItem("cart");
  setCartItems([]);

  // ✅ Notify other components that the cart is updated
  window.dispatchEvent(new Event("cartUpdated"));

  toast.success("Order placed successfully!");

  // Optionally reset the form
  setName("");
  setAddress("");
  setEmail("");
};


  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Checkout</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <p>{item.name || item.title}</p>
            <p>${item.price.toFixed(2)}</p>
          </div>
        ))}
        <hr className="my-3" />
        <div className="flex justify-between font-bold text-lg">
          <p>Total:</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
      </div>

      <form onSubmit={handlePlaceOrder} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          placeholder="Shipping Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-3 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded"
        >
          Place Order
        </button>
      </form>
    </section>
  );
};

export default Checkout;
