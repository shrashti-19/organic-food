// import React, { useEffect, useState } from "react";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

//   const handleRemove = (id) => {
//     const updatedCart = cartItems.filter(item => item.id !== id);
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <section className="p-6 lg:px-20">
//       <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       ) : (
//         <div className="space-y-4">
//           {cartItems.map(item => (
//             <div key={item.id} className="flex items-center justify-between border p-4 rounded shadow">
//               <div className="flex items-center gap-4">
//                 <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
//                 <div>
//                   <h3 className="font-semibold">{item.name}</h3>
//                   <p className="text-green-600 font-medium">${item.price}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => handleRemove(item.id)}
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           <div className="text-right mt-6">
//             <h3 className="text-xl font-bold">
//               Total: <span className="text-green-700">${totalPrice.toFixed(2)}</span>
//             </h3>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const updateCartFromStorage = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  };

  useEffect(() => {
    updateCartFromStorage();

    // Listen to custom cart update events
    const handleCartChange = () => updateCartFromStorage();

    window.addEventListener("cartUpdated", handleCartChange);
    window.addEventListener("storage", handleCartChange);

    return () => {
      window.removeEventListener("cartUpdated", handleCartChange);
      window.removeEventListener("storage", handleCartChange);
    };
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated")); // Notify other components
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="p-6 lg:px-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-green-600 font-medium">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right mt-6">
            <h3 className="text-xl font-bold">
              Total:{" "}
              <span className="text-green-700">${totalPrice.toFixed(2)}</span>
            </h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
